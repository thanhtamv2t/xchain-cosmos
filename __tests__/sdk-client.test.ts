import nock from 'nock'
import { TxHistoryResponse, TxResponse } from '@xchainjs/xchain-cosmos'
import { BroadcastTxCommitResult, Coin, BaseAccount } from 'cosmos-client/api'
import { MsgSend, MsgMultiSend } from 'cosmos-client/x/bank'
import { codec } from 'cosmos-client'

import { CosmosSDKClient } from '../src/cosmos/sdk-client'

const mockAccountsAddress = (
  url: string,
  address: string,
  result: {
    height: number
    result: BaseAccount
  },
) => {
  nock(url).get(`/auth/accounts/${address}`).reply(200, result)
}

const mockAccountsBalance = (
  url: string,
  address: string,
  result: {
    height: number
    result: Coin[]
  },
) => {
  nock(url).get(`/bank/balances/${address}`).reply(200, result)
}

const assertTxsPost = (
  url: string,
  from_address: string,
  to_address: string,
  msg_type: string,
  send_amount: Coin[],
  memo: undefined | string,
  result: BroadcastTxCommitResult,
): void => {
  nock(url, { allowUnmocked: true })
    .post(`/txs`, (body) => {
      expect(body.tx.msg.length).toEqual(1)
      expect(body.tx.msg[0].type).toEqual(msg_type)
      expect(body.tx.msg[0].value.from_address).toEqual(from_address)
      expect(body.tx.msg[0].value.to_address).toEqual(to_address)
      expect(body.tx.msg[0].value.amount).toEqual(send_amount)
      expect(body.tx.memo).toEqual(memo)
      return true
    })
    .reply(200, result)
}

const assertTxHstory = (url: string, address: string, result: TxHistoryResponse): void => {
  nock(url).get(`/txs?message.sender=${address}`).reply(200, result)
}

const assertTxHashGet = (url: string, hash: string, result: TxResponse): void => {
  nock(url).get(`/txs/${hash}`).reply(200, result)
}

describe('SDK Client Test', () => {
  const cosmosMainnetClient: CosmosSDKClient = new CosmosSDKClient({
    server: 'https://api.cosmos.network',
    chainId: 'cosmoshub-3',
    prefix: 'cosmos',
  })
  const cosmosTestnetClient: CosmosSDKClient = new CosmosSDKClient({
    server: 'http://lcd.gaia.bigdipper.live:1317',
    chainId: 'gaia-3a',
    prefix: 'cosmos',
  })

  const thorMainnetClient: CosmosSDKClient = new CosmosSDKClient({
    server: 'http://104.248.96.152:1317',
    chainId: 'thorchain',
    prefix: 'thor',
  })

  const thorTestnetClient: CosmosSDKClient = new CosmosSDKClient({
    server: 'http://13.238.212.224:1317',
    chainId: 'thorchain',
    prefix: 'tthor',
  })

  const cosmos_phrase = 'foster blouse cattle fiction deputy social brown toast various sock awkward print'
  const cosmos_mainnet_address0 = 'cosmos16mzuy68a9xzqpsp88dt4f2tl0d49drhepn68fg'
  const cosmos_mainnet_address1 = 'cosmos1924f27fujxqnkt74u4d3ke3sfygugv9qp29hmk'

  const cosmos_testnet_address0 = 'cosmos13hrqe0g38nqnjgnstkfrlm2zd790g5yegntshv'
  const cosmos_testnet_address1 = 'cosmos1re8rf3sv2tkx88xx6825tjqtfntrrfj0h4u94u'

  const thor_phrase = 'rural bright ball negative already grass good grant nation screen model pizza'
  const thor_mainnet_address0 = 'thor19kacmmyuf2ysyvq3t9nrl9495l5cvktjs0yfws'
  const thor_mainnet_address1 = 'thor1hrf34g3lxwvpk7gjte0xvahf3txnq8ecgaf4nc'

  const thor_testnet_address0 = 'tthor19kacmmyuf2ysyvq3t9nrl9495l5cvktj5c4eh4'
  const thor_testnet_address1 = 'tthor1hrf34g3lxwvpk7gjte0xvahf3txnq8ecv2c92a'

  const derivationPaths = {
    thor: {
      mainnet: `m/44'/931'/0'/0/`,
      testnet: `m/44'/931'/0'/0/`,
    },
    cosmos: {
      mainnet: `44'/118'/0'/0/`,
      testnet: `44'/118'/1'/0/`,
    },
  }

  it('getPrivKeyFromMnemonic -> getAddressFromPrivKey', async () => {
    //Cosmos Mainnet
    let privKeyMainnet0 = cosmosMainnetClient.getPrivKeyFromMnemonic(
      cosmos_phrase,
      derivationPaths.cosmos.mainnet + '0',
    )
    expect(cosmosMainnetClient.getAddressFromPrivKey(privKeyMainnet0)).toEqual(cosmos_mainnet_address0)

    let privKeyMainnet1 = cosmosMainnetClient.getPrivKeyFromMnemonic(
      cosmos_phrase,
      derivationPaths.cosmos.mainnet + '1',
    )
    expect(cosmosMainnetClient.getAddressFromPrivKey(privKeyMainnet1)).toEqual(cosmos_mainnet_address1)

    //Cosmos testnet
    let privKeyTestnet0 = cosmosTestnetClient.getPrivKeyFromMnemonic(
      cosmos_phrase,
      derivationPaths.cosmos.testnet + '0',
    )
    expect(cosmosTestnetClient.getAddressFromPrivKey(privKeyTestnet0)).toEqual(cosmos_testnet_address0)

    let privKeyTestnet1 = cosmosTestnetClient.getPrivKeyFromMnemonic(
      cosmos_phrase,
      derivationPaths.cosmos.testnet + '1',
    )
    expect(cosmosTestnetClient.getAddressFromPrivKey(privKeyTestnet1)).toEqual(cosmos_testnet_address1)

    //Thor Mainnet
    privKeyMainnet0 = thorMainnetClient.getPrivKeyFromMnemonic(thor_phrase, derivationPaths.thor.mainnet + '0')
    expect(thorMainnetClient.getAddressFromPrivKey(privKeyMainnet0)).toEqual(thor_mainnet_address0)

    privKeyMainnet1 = thorMainnetClient.getPrivKeyFromMnemonic(thor_phrase, derivationPaths.thor.mainnet + '1')
    expect(thorMainnetClient.getAddressFromPrivKey(privKeyMainnet1)).toEqual(thor_mainnet_address1)

    //thor testnet
    privKeyTestnet0 = thorTestnetClient.getPrivKeyFromMnemonic(thor_phrase, derivationPaths.thor.testnet + '0')
    expect(thorTestnetClient.getAddressFromPrivKey(privKeyTestnet0)).toEqual(thor_testnet_address0)

    privKeyTestnet1 = thorTestnetClient.getPrivKeyFromMnemonic(thor_phrase, derivationPaths.thor.testnet + '1')
    expect(thorTestnetClient.getAddressFromPrivKey(privKeyTestnet1)).toEqual(thor_testnet_address1)
  })

  it('checkAddress', async () => {
    expect(cosmosMainnetClient.checkAddress(cosmos_mainnet_address0)).toBeTruthy()
    expect(cosmosTestnetClient.checkAddress(cosmos_testnet_address0)).toBeTruthy()
    expect(cosmosMainnetClient.checkAddress('thor19kacmmyuf2ysyvq3t9nrl9495l5cvktjs0yfws')).toBeFalsy()
    expect(cosmosTestnetClient.checkAddress('tthor19kacmmyuf2ysyvq3t9nrl9495l5cvktj5c4eh4')).toBeFalsy()

    expect(thorMainnetClient.checkAddress(thor_mainnet_address0)).toBeTruthy()
    expect(thorTestnetClient.checkAddress(thor_testnet_address0)).toBeTruthy()
    expect(thorMainnetClient.checkAddress(cosmos_mainnet_address0)).toBeFalsy()
    expect(thorTestnetClient.checkAddress(cosmos_testnet_address0)).toBeFalsy()
    expect(thorMainnetClient.checkAddress('tthor19kacmmyuf2ysyvq3t9nrl9495l5cvktj5c4eh4')).toBeFalsy()
    expect(thorTestnetClient.checkAddress('thor19kacmmyuf2ysyvq3t9nrl9495l5cvktjs0yfws')).toBeFalsy()
  })

  it('getBalance', async () => {
    mockAccountsBalance(cosmosMainnetClient.server, cosmos_mainnet_address0, {
      height: 0,
      result: [],
    })
    let balances = await cosmosMainnetClient.getBalance(cosmos_mainnet_address0)
    expect(balances).toEqual([])

    mockAccountsBalance(cosmosTestnetClient.server, cosmos_testnet_address0, {
      height: 0,
      result: [
        {
          denom: 'umuon',
          amount: '75000000',
        },
      ],
    })

    balances = await cosmosTestnetClient.getBalance(cosmos_testnet_address0)
    expect(parseInt(balances[0].amount || '0')).toEqual(75000000)
    expect(balances[0].denom).toEqual('umuon')

    mockAccountsBalance(thorMainnetClient.server, thor_mainnet_address0, {
      height: 0,
      result: [
        {
          denom: 'thor',
          amount: '100',
        },
      ],
    })
    balances = await thorMainnetClient.getBalance(thor_mainnet_address0)
    expect(balances.length).toEqual(1)
    expect(balances[0].denom).toEqual('thor')
    expect(parseInt(balances[0].amount || '0')).toEqual(100)

    mockAccountsBalance(thorTestnetClient.server, thor_testnet_address0, {
      height: 0,
      result: [],
    })
    balances = await thorTestnetClient.getBalance(thor_testnet_address0)
    expect(balances).toEqual([])
  })

  it('searchTx', async () => {
    assertTxHstory(cosmosMainnetClient.server, cosmos_mainnet_address0, {
      count: 0,
      limit: 30,
      page_number: 1,
      page_total: 1,
      total_count: 0,
      txs: [],
    })
    let txHistory = await cosmosMainnetClient.searchTx({ messageSender: cosmos_mainnet_address0 })
    expect(parseInt(txHistory.total_count?.toString() || '0')).toEqual(0)

    assertTxHstory(cosmosTestnetClient.server, 'cosmos1xvt4e7xd0j9dwv2w83g50tpcltsl90h52003e2', {
      count: 1,
      limit: 30,
      page_number: 1,
      page_total: 1,
      total_count: 1,
      txs: [
        {
          height: 1047,
          txhash: '098E70A9529AC8F1A57AA0FE65D1D13040B0E803AB8BE7F3B32098164009DED3',
          data: '0A090A076465706F736974',
          raw_log: 'transaction logs',
          gas_wanted: '5000000000000000',
          gas_used: '148996',
          tx: {
            body: {
              messages: [
                {
                  type: 'cosmos-sdk/MsgSend',
                  value: {
                    from_address: 'cosmos1xvt4e7xd0j9dwv2w83g50tpcltsl90h52003e2',
                    to_address: cosmos_testnet_address0,
                    amount: [
                      {
                        denom: 'umuon',
                        amount: 1000000,
                      },
                    ],
                  },
                },
              ],
            },
          },
          timestamp: '2020-09-25T06:09:15Z',
        },
      ],
    })
    txHistory = await cosmosTestnetClient.searchTx({ messageSender: 'cosmos1xvt4e7xd0j9dwv2w83g50tpcltsl90h52003e2' })
    expect(parseInt(txHistory.total_count?.toString() || '0')).toBeGreaterThan(0)

    assertTxHstory(thorMainnetClient.server, thor_mainnet_address0, {
      count: 0,
      limit: 30,
      page_number: 1,
      page_total: 1,
      total_count: 0,
      txs: [],
    })
    txHistory = await thorMainnetClient.searchTx({ messageSender: thor_mainnet_address0 })
    expect(parseInt(txHistory.total_count?.toString() || '0')).toEqual(0)

    assertTxHstory(thorTestnetClient.server, thor_testnet_address0, {
      count: 1,
      limit: 30,
      page_number: 1,
      page_total: 1,
      total_count: 1,
      txs: [
        {
          height: 1047,
          txhash: '098E70A9529AC8F1A57AA0FE65D1D13040B0E803AB8BE7F3B32098164009DED3',
          data: '0A090A076465706F736974',
          raw_log: 'transaction logs',
          gas_wanted: '5000000000000000',
          gas_used: '148996',
          tx: {
            body: {
              messages: [
                {
                  type: 'thorchain/MsgSend',
                  value: {
                    from_address: 'thor19kacmmyuf2ysyvq3t9nrl9495l5cvktjs0yfws',
                    to_address: 'thor19kacmmyuf2ysyvq3t9nrl9495l5cvktjs0yfws',
                    amount: [
                      {
                        denom: 'thor',
                        amount: 1000000,
                      },
                    ],
                  },
                },
              ],
            },
          },
          timestamp: '2020-09-25T06:09:15Z',
        },
      ],
    })

    txHistory = await thorTestnetClient.searchTx({ messageSender: thor_testnet_address0 })
    expect(parseInt(txHistory.total_count?.toString() || '0')).toEqual(1)
  })

  it('transfer', async () => {
    const expected_txsPost_result: BroadcastTxCommitResult = {
      check_tx: {},
      deliver_tx: {},
      txhash: 'EA2FAC9E82290DCB9B1374B4C95D7C4DD8B9614A96FACD38031865EB1DBAE24D',
      height: 0,
    }

    mockAccountsAddress(cosmosTestnetClient.server, cosmos_testnet_address0, {
      height: 0,
      result: {
        coins: [
          {
            denom: 'muon',
            amount: '21000',
          },
        ],
        account_number: '0',
        sequence: '0',
      },
    })

    assertTxsPost(
      cosmosTestnetClient.server,
      cosmos_testnet_address0,
      'cosmos1gehrq0pr5d79q8nxnaenvqh09g56jafm82thjv',
      'cosmos-sdk/MsgSend',
      [
        {
          denom: 'muon',
          amount: '10000',
        },
      ],
      'transfer',
      expected_txsPost_result,
    )

    codec.registerCodec('cosmos-sdk/MsgSend', MsgSend, MsgSend.fromJSON)
    codec.registerCodec('cosmos-sdk/MsgMultiSend', MsgMultiSend, MsgMultiSend.fromJSON)

    const result = await cosmosTestnetClient.transfer({
      privkey: cosmosTestnetClient.getPrivKeyFromMnemonic(cosmos_phrase, derivationPaths.cosmos.testnet + '0'),
      from: cosmos_testnet_address0,
      to: 'cosmos1gehrq0pr5d79q8nxnaenvqh09g56jafm82thjv',
      amount: 10000,
      asset: 'muon',
      memo: 'transfer',
    })

    expect(result).toEqual(expected_txsPost_result)

    mockAccountsAddress(thorTestnetClient.server, thor_testnet_address0, {
      height: 0,
      result: {
        coins: [
          {
            denom: 'thor',
            amount: '21000',
          },
        ],
        account_number: '0',
        sequence: '0',
      },
    })
    assertTxsPost(
      thorTestnetClient.server,
      thor_testnet_address0,
      'tthor19kacmmyuf2ysyvq3t9nrl9495l5cvktj5c4eh4',
      'thorchain/MsgSend',
      [
        {
          denom: 'thor',
          amount: '10000',
        },
      ],
      'transfer',
      expected_txsPost_result,
    )
  })

  it('get transaction data', async () => {
    assertTxHashGet(cosmosMainnetClient.server, '19BFC1E8EBB10AA1EC6B82E380C6F5FD349D367737EA8D55ADB4A24F0F7D1066', {
      height: 45582,
      txhash: '19BFC1E8EBB10AA1EC6B82E380C6F5FD349D367737EA8D55ADB4A24F0F7D1066',
      data: '0A090A076465706F736974',
      raw_log: 'transaction logs',
      gas_wanted: '5000000000000000',
      gas_used: '148996',
      tx: {
        body: {
          messages: [
            {
              type: 'cosmos-sdk/MsgSend',
              value: {
                from_address: 'cosmos1xvt4e7xd0j9dwv2w83g50tpcltsl90h52003e2',
                to_address: cosmos_mainnet_address0,
                amount: [
                  {
                    denom: 'thor',
                    amount: 1000000,
                  },
                ],
              },
            },
          ],
        },
      },
      timestamp: '2020-09-25T06:09:15Z',
    })
    let tx = await cosmosMainnetClient.txsHashGet('19BFC1E8EBB10AA1EC6B82E380C6F5FD349D367737EA8D55ADB4A24F0F7D1066')
    expect(tx.txhash).toEqual('19BFC1E8EBB10AA1EC6B82E380C6F5FD349D367737EA8D55ADB4A24F0F7D1066')
    expect(tx.height).toEqual(45582)

    const txHashData = {
      height: 1047,
      txhash: '19BFC1E8EBB10AA1EC6B82E380C6F5FD349D367737EA8D55ADB4A24F0F7D1066',
      data: '0A090A076465706F736974',
      raw_log: 'transaction logs',
      gas_wanted: '5000000000000000',
      gas_used: '148996',
      tx: {
        body: {
          messages: [
            {
              type: 'thorchain/MsgSend',
              value: {
                from_address: 'thor19kacmmyuf2ysyvq3t9nrl9495l5cvktjs0yfws',
                to_address: 'thor19kacmmyuf2ysyvq3t9nrl9495l5cvktjs0yfws',
                amount: [
                  {
                    denom: 'thor',
                    amount: 1000000,
                  },
                ],
              },
            },
          ],
        },
      },
      timestamp: '2020-09-25T06:09:15Z',
    }
    assertTxHashGet(
      thorTestnetClient.server,
      '19BFC1E8EBB10AA1EC6B82E380C6F5FD349D367737EA8D55ADB4A24F0F7D1066',
      txHashData,
    )

    tx = await thorTestnetClient.txsHashGet('19BFC1E8EBB10AA1EC6B82E380C6F5FD349D367737EA8D55ADB4A24F0F7D1066')
    expect(tx).toEqual(txHashData)
  })
})

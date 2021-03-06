/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@solana/spl-token'
import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category RedeemThreeToken
 * @category generated
 */
export type RedeemThreeTokenInstructionArgs = {
  merchantTokenAmount: beet.bignum
  genericTokenAmount: beet.bignum
  usdcAmount: beet.bignum
}
/**
 * @category Instructions
 * @category RedeemThreeToken
 * @category generated
 */
export const redeemThreeTokenStruct = new beet.BeetArgsStruct<
  RedeemThreeTokenInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['merchantTokenAmount', beet.u64],
    ['genericTokenAmount', beet.u64],
    ['usdcAmount', beet.u64],
  ],
  'RedeemThreeTokenInstructionArgs'
)
/**
 * Accounts required by the _redeemThreeToken_ instruction
 *
 * @property [] merchantTokenData
 * @property [] genericTokenData
 * @property [_writable_] merchantTokenMint
 * @property [_writable_] genericTokenMint
 * @property [_writable_] userMerchantToken
 * @property [_writable_] userGenericToken
 * @property [_writable_] userUsdcToken
 * @property [**signer**] user
 * @property [_writable_] merchantReserveUsdcAccount
 * @property [_writable_] genericReserveUsdcAccount
 * @property [_writable_] merchantEarnedUsdcAccount
 * @property [_writable_] treasuryAccount
 * @property [] mint
 * @category Instructions
 * @category RedeemThreeToken
 * @category generated
 */
export type RedeemThreeTokenInstructionAccounts = {
  merchantTokenData: web3.PublicKey
  genericTokenData: web3.PublicKey
  merchantTokenMint: web3.PublicKey
  genericTokenMint: web3.PublicKey
  userMerchantToken: web3.PublicKey
  userGenericToken: web3.PublicKey
  userUsdcToken: web3.PublicKey
  user: web3.PublicKey
  merchantReserveUsdcAccount: web3.PublicKey
  genericReserveUsdcAccount: web3.PublicKey
  merchantEarnedUsdcAccount: web3.PublicKey
  treasuryAccount: web3.PublicKey
  mint: web3.PublicKey
}

export const redeemThreeTokenInstructionDiscriminator = [
  247, 173, 238, 198, 49, 57, 5, 170,
]

/**
 * Creates a _RedeemThreeToken_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category RedeemThreeToken
 * @category generated
 */
export function createRedeemThreeTokenInstruction(
  accounts: RedeemThreeTokenInstructionAccounts,
  args: RedeemThreeTokenInstructionArgs
) {
  const {
    merchantTokenData,
    genericTokenData,
    merchantTokenMint,
    genericTokenMint,
    userMerchantToken,
    userGenericToken,
    userUsdcToken,
    user,
    merchantReserveUsdcAccount,
    genericReserveUsdcAccount,
    merchantEarnedUsdcAccount,
    treasuryAccount,
    mint,
  } = accounts

  const [data] = redeemThreeTokenStruct.serialize({
    instructionDiscriminator: redeemThreeTokenInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: merchantTokenData,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: genericTokenData,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: merchantTokenMint,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: genericTokenMint,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: userMerchantToken,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: userGenericToken,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: userUsdcToken,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: user,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: merchantReserveUsdcAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: genericReserveUsdcAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: merchantEarnedUsdcAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: treasuryAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: mint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
  ]

  const ix = new web3.TransactionInstruction({
    programId: new web3.PublicKey(
      'G28ceN5471mPMKhSThZu4tvzK6Skbxrr8qy4abskVsYJ'
    ),
    keys,
    data,
  })
  return ix
}

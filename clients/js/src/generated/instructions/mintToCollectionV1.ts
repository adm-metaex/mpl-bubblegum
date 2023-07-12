/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  AccountMeta,
  Context,
  Pda,
  PublicKey,
  Signer,
  TransactionBuilder,
  publicKey,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import {
  Serializer,
  array,
  mapSerializer,
  struct,
  u8,
} from '@metaplex-foundation/umi/serializers';
import { findTreeConfigPda } from '../accounts';
import { addAccountMeta, addObjectProperty } from '../shared';
import {
  MetadataArgs,
  MetadataArgsArgs,
  getMetadataArgsSerializer,
} from '../types';

// Accounts.
export type MintToCollectionV1InstructionAccounts = {
  treeConfig?: PublicKey | Pda;
  leafOwner: PublicKey | Pda;
  leafDelegate: PublicKey | Pda;
  merkleTree: PublicKey | Pda;
  payer?: Signer;
  treeCreatorOrDelegate: Signer;
  collectionAuthority: Signer;
  collectionAuthorityRecordPda: PublicKey | Pda;
  collectionMint: PublicKey | Pda;
  collectionMetadata: PublicKey | Pda;
  editionAccount: PublicKey | Pda;
  bubblegumSigner?: PublicKey | Pda;
  logWrapper?: PublicKey | Pda;
  compressionProgram?: PublicKey | Pda;
  tokenMetadataProgram?: PublicKey | Pda;
  systemProgram?: PublicKey | Pda;
};

// Data.
export type MintToCollectionV1InstructionData = {
  discriminator: Array<number>;
  metadataArgs: MetadataArgs;
};

export type MintToCollectionV1InstructionDataArgs = {
  metadataArgs: MetadataArgsArgs;
};

/** @deprecated Use `getMintToCollectionV1InstructionDataSerializer()` without any argument instead. */
export function getMintToCollectionV1InstructionDataSerializer(
  _context: object
): Serializer<
  MintToCollectionV1InstructionDataArgs,
  MintToCollectionV1InstructionData
>;
export function getMintToCollectionV1InstructionDataSerializer(): Serializer<
  MintToCollectionV1InstructionDataArgs,
  MintToCollectionV1InstructionData
>;
export function getMintToCollectionV1InstructionDataSerializer(
  _context: object = {}
): Serializer<
  MintToCollectionV1InstructionDataArgs,
  MintToCollectionV1InstructionData
> {
  return mapSerializer<
    MintToCollectionV1InstructionDataArgs,
    any,
    MintToCollectionV1InstructionData
  >(
    struct<MintToCollectionV1InstructionData>(
      [
        ['discriminator', array(u8(), { size: 8 })],
        ['metadataArgs', getMetadataArgsSerializer()],
      ],
      { description: 'MintToCollectionV1InstructionData' }
    ),
    (value) => ({
      ...value,
      discriminator: [153, 18, 178, 47, 197, 158, 86, 15],
    })
  ) as Serializer<
    MintToCollectionV1InstructionDataArgs,
    MintToCollectionV1InstructionData
  >;
}

// Args.
export type MintToCollectionV1InstructionArgs =
  MintToCollectionV1InstructionDataArgs;

// Instruction.
export function mintToCollectionV1(
  context: Pick<Context, 'programs' | 'eddsa' | 'payer'>,
  input: MintToCollectionV1InstructionAccounts &
    MintToCollectionV1InstructionArgs
): TransactionBuilder {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId = context.programs.getPublicKey(
    'mplBubblegum',
    'BGUMAp9Gq7iTEuizy4pqaxsTyUCBK68MDfK752saRPUY'
  );

  // Resolved inputs.
  const resolvedAccounts = {
    leafOwner: [input.leafOwner, false] as const,
    leafDelegate: [input.leafDelegate, false] as const,
    merkleTree: [input.merkleTree, true] as const,
    treeCreatorOrDelegate: [input.treeCreatorOrDelegate, false] as const,
    collectionAuthority: [input.collectionAuthority, false] as const,
    collectionAuthorityRecordPda: [
      input.collectionAuthorityRecordPda,
      false,
    ] as const,
    collectionMint: [input.collectionMint, false] as const,
    collectionMetadata: [input.collectionMetadata, true] as const,
    editionAccount: [input.editionAccount, false] as const,
  };
  const resolvingArgs = {};
  addObjectProperty(
    resolvedAccounts,
    'treeConfig',
    input.treeConfig
      ? ([input.treeConfig, true] as const)
      : ([
          findTreeConfigPda(context, {
            merkleTree: publicKey(input.merkleTree, false),
          }),
          true,
        ] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'payer',
    input.payer
      ? ([input.payer, false] as const)
      : ([context.payer, false] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'bubblegumSigner',
    input.bubblegumSigner
      ? ([input.bubblegumSigner, false] as const)
      : ([
          publicKey('4ewWZC5gT6TGpm5LZNDs9wVonfUT2q5PP5sc9kVbwMAK'),
          false,
        ] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'logWrapper',
    input.logWrapper
      ? ([input.logWrapper, false] as const)
      : ([
          context.programs.getPublicKey(
            'splNoop',
            'noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV'
          ),
          false,
        ] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'compressionProgram',
    input.compressionProgram
      ? ([input.compressionProgram, false] as const)
      : ([
          context.programs.getPublicKey(
            'splAccountCompression',
            'cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK'
          ),
          false,
        ] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'tokenMetadataProgram',
    input.tokenMetadataProgram
      ? ([input.tokenMetadataProgram, false] as const)
      : ([
          context.programs.getPublicKey(
            'mplTokenMetadata',
            'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
          ),
          false,
        ] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'systemProgram',
    input.systemProgram
      ? ([input.systemProgram, false] as const)
      : ([
          context.programs.getPublicKey(
            'splSystem',
            '11111111111111111111111111111111'
          ),
          false,
        ] as const)
  );
  const resolvedArgs = { ...input, ...resolvingArgs };

  addAccountMeta(keys, signers, resolvedAccounts.treeConfig, false);
  addAccountMeta(keys, signers, resolvedAccounts.leafOwner, false);
  addAccountMeta(keys, signers, resolvedAccounts.leafDelegate, false);
  addAccountMeta(keys, signers, resolvedAccounts.merkleTree, false);
  addAccountMeta(keys, signers, resolvedAccounts.payer, false);
  addAccountMeta(keys, signers, resolvedAccounts.treeCreatorOrDelegate, false);
  addAccountMeta(keys, signers, resolvedAccounts.collectionAuthority, false);
  addAccountMeta(
    keys,
    signers,
    resolvedAccounts.collectionAuthorityRecordPda,
    false
  );
  addAccountMeta(keys, signers, resolvedAccounts.collectionMint, false);
  addAccountMeta(keys, signers, resolvedAccounts.collectionMetadata, false);
  addAccountMeta(keys, signers, resolvedAccounts.editionAccount, false);
  addAccountMeta(keys, signers, resolvedAccounts.bubblegumSigner, false);
  addAccountMeta(keys, signers, resolvedAccounts.logWrapper, false);
  addAccountMeta(keys, signers, resolvedAccounts.compressionProgram, false);
  addAccountMeta(keys, signers, resolvedAccounts.tokenMetadataProgram, false);
  addAccountMeta(keys, signers, resolvedAccounts.systemProgram, false);

  // Data.
  const data =
    getMintToCollectionV1InstructionDataSerializer().serialize(resolvedArgs);

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}

/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Context,
  Option,
  OptionOrNullable,
  Pda,
  PublicKey,
  Signer,
  TransactionBuilder,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import {
  Serializer,
  array,
  bytes,
  mapSerializer,
  option,
  struct,
  u32,
  u64,
  u8,
} from '@metaplex-foundation/umi/serializers';
import { findTreeConfigPda } from '../accounts';
import {
  ResolvedAccount,
  ResolvedAccountsWithIndices,
  expectPublicKey,
  expectSome,
  getAccountMetasAndSigners,
} from '../shared';
import {
  MetadataArgs,
  MetadataArgsArgs,
  UpdateArgs,
  UpdateArgsArgs,
  getMetadataArgsSerializer,
  getUpdateArgsSerializer,
} from '../types';

// Accounts.
export type UpdateMetadataInstructionAccounts = {
  metadataBuffer?: PublicKey | Pda;
  treeConfig?: PublicKey | Pda;
  treeCreatorOrDelegate?: Signer;
  leafOwner: PublicKey | Pda;
  leafDelegate?: PublicKey | Pda;
  payer?: Signer;
  merkleTree: PublicKey | Pda;
  logWrapper?: PublicKey | Pda;
  compressionProgram?: PublicKey | Pda;
  tokenMetadataProgram?: PublicKey | Pda;
  systemProgram?: PublicKey | Pda;
};

// Data.
export type UpdateMetadataInstructionData = {
  discriminator: Array<number>;
  root: Uint8Array;
  nonce: bigint;
  index: number;
  currentMetadata: Option<MetadataArgs>;
  updateArgs: UpdateArgs;
};

export type UpdateMetadataInstructionDataArgs = {
  root: Uint8Array;
  nonce: number | bigint;
  index: number;
  currentMetadata: OptionOrNullable<MetadataArgsArgs>;
  updateArgs: UpdateArgsArgs;
};

export function getUpdateMetadataInstructionDataSerializer(): Serializer<
  UpdateMetadataInstructionDataArgs,
  UpdateMetadataInstructionData
> {
  return mapSerializer<
    UpdateMetadataInstructionDataArgs,
    any,
    UpdateMetadataInstructionData
  >(
    struct<UpdateMetadataInstructionData>(
      [
        ['discriminator', array(u8(), { size: 8 })],
        ['root', bytes({ size: 32 })],
        ['nonce', u64()],
        ['index', u32()],
        ['currentMetadata', option(getMetadataArgsSerializer())],
        ['updateArgs', getUpdateArgsSerializer()],
      ],
      { description: 'UpdateMetadataInstructionData' }
    ),
    (value) => ({
      ...value,
      discriminator: [170, 182, 43, 239, 97, 78, 225, 186],
    })
  ) as Serializer<
    UpdateMetadataInstructionDataArgs,
    UpdateMetadataInstructionData
  >;
}

// Args.
export type UpdateMetadataInstructionArgs = UpdateMetadataInstructionDataArgs;

// Instruction.
export function updateMetadata(
  context: Pick<Context, 'eddsa' | 'identity' | 'payer' | 'programs'>,
  input: UpdateMetadataInstructionAccounts & UpdateMetadataInstructionArgs
): TransactionBuilder {
  // Program ID.
  const programId = context.programs.getPublicKey(
    'mplBubblegum',
    'BGUMAp9Gq7iTEuizy4pqaxsTyUCBK68MDfK752saRPUY'
  );

  // Accounts.
  const resolvedAccounts: ResolvedAccountsWithIndices = {
    metadataBuffer: {
      index: 0,
      isWritable: false,
      value: input.metadataBuffer ?? null,
    },
    treeConfig: {
      index: 1,
      isWritable: false,
      value: input.treeConfig ?? null,
    },
    treeCreatorOrDelegate: {
      index: 2,
      isWritable: false,
      value: input.treeCreatorOrDelegate ?? null,
    },
    leafOwner: { index: 3, isWritable: false, value: input.leafOwner ?? null },
    leafDelegate: {
      index: 4,
      isWritable: false,
      value: input.leafDelegate ?? null,
    },
    payer: { index: 5, isWritable: false, value: input.payer ?? null },
    merkleTree: { index: 6, isWritable: true, value: input.merkleTree ?? null },
    logWrapper: {
      index: 7,
      isWritable: false,
      value: input.logWrapper ?? null,
    },
    compressionProgram: {
      index: 8,
      isWritable: false,
      value: input.compressionProgram ?? null,
    },
    tokenMetadataProgram: {
      index: 9,
      isWritable: false,
      value: input.tokenMetadataProgram ?? null,
    },
    systemProgram: {
      index: 10,
      isWritable: false,
      value: input.systemProgram ?? null,
    },
  };

  // Arguments.
  const resolvedArgs: UpdateMetadataInstructionArgs = { ...input };

  // Default values.
  if (!resolvedAccounts.treeConfig.value) {
    resolvedAccounts.treeConfig.value = findTreeConfigPda(context, {
      merkleTree: expectPublicKey(resolvedAccounts.merkleTree.value),
    });
  }
  if (!resolvedAccounts.treeCreatorOrDelegate.value) {
    resolvedAccounts.treeCreatorOrDelegate.value = context.identity;
  }
  if (!resolvedAccounts.leafDelegate.value) {
    resolvedAccounts.leafDelegate.value = expectSome(
      resolvedAccounts.leafOwner.value
    );
  }
  if (!resolvedAccounts.payer.value) {
    resolvedAccounts.payer.value = context.payer;
  }
  if (!resolvedAccounts.logWrapper.value) {
    resolvedAccounts.logWrapper.value = context.programs.getPublicKey(
      'splNoop',
      'noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV'
    );
    resolvedAccounts.logWrapper.isWritable = false;
  }
  if (!resolvedAccounts.compressionProgram.value) {
    resolvedAccounts.compressionProgram.value = context.programs.getPublicKey(
      'splAccountCompression',
      'cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK'
    );
    resolvedAccounts.compressionProgram.isWritable = false;
  }
  if (!resolvedAccounts.tokenMetadataProgram.value) {
    resolvedAccounts.tokenMetadataProgram.value = context.programs.getPublicKey(
      'mplTokenMetadata',
      'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
    );
    resolvedAccounts.tokenMetadataProgram.isWritable = false;
  }
  if (!resolvedAccounts.systemProgram.value) {
    resolvedAccounts.systemProgram.value = context.programs.getPublicKey(
      'splSystem',
      '11111111111111111111111111111111'
    );
    resolvedAccounts.systemProgram.isWritable = false;
  }

  // Accounts in order.
  const orderedAccounts: ResolvedAccount[] = Object.values(
    resolvedAccounts
  ).sort((a, b) => a.index - b.index);

  // Keys and Signers.
  const [keys, signers] = getAccountMetasAndSigners(
    orderedAccounts,
    'programId',
    programId
  );

  // Data.
  const data = getUpdateMetadataInstructionDataSerializer().serialize(
    resolvedArgs as UpdateMetadataInstructionDataArgs
  );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}

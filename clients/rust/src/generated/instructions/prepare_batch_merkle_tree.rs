//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use borsh::BorshDeserialize;
use borsh::BorshSerialize;

/// Accounts.
pub struct PrepareBatchMerkleTree {
    pub merkle_tree: solana_program::pubkey::Pubkey,
    /// Authority that controls write-access to the tree
    /// Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
    pub authority: solana_program::pubkey::Pubkey,
    /// Program used to emit changelogs as cpi instruction data.
    pub noop: solana_program::pubkey::Pubkey,
}

impl PrepareBatchMerkleTree {
    pub fn instruction(
        &self,
        args: PrepareBatchMerkleTreeInstructionArgs,
    ) -> solana_program::instruction::Instruction {
        self.instruction_with_remaining_accounts(args, &[])
    }
    #[allow(clippy::vec_init_then_push)]
    pub fn instruction_with_remaining_accounts(
        &self,
        args: PrepareBatchMerkleTreeInstructionArgs,
        remaining_accounts: &[solana_program::instruction::AccountMeta],
    ) -> solana_program::instruction::Instruction {
        let mut accounts = Vec::with_capacity(3 + remaining_accounts.len());
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.merkle_tree,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.authority,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.noop, false,
        ));
        accounts.extend_from_slice(remaining_accounts);
        let mut data = PrepareBatchMerkleTreeInstructionData::new()
            .try_to_vec()
            .unwrap();
        let mut args = args.try_to_vec().unwrap();
        data.append(&mut args);

        solana_program::instruction::Instruction {
            program_id: crate::SPL_ACCOUNT_COMPRESSION_ID,
            accounts,
            data,
        }
    }
}

#[derive(BorshDeserialize, BorshSerialize)]
struct PrepareBatchMerkleTreeInstructionData {
    discriminator: [u8; 8],
}

impl PrepareBatchMerkleTreeInstructionData {
    fn new() -> Self {
        Self {
            discriminator: [230, 124, 120, 196, 249, 134, 199, 128],
        }
    }
}

#[derive(BorshSerialize, BorshDeserialize, Clone, Debug, Eq, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub struct PrepareBatchMerkleTreeInstructionArgs {
    pub max_depth: u32,
    pub max_buffer_size: u32,
}

/// Instruction builder.
#[derive(Default)]
pub struct PrepareBatchMerkleTreeBuilder {
    merkle_tree: Option<solana_program::pubkey::Pubkey>,
    authority: Option<solana_program::pubkey::Pubkey>,
    noop: Option<solana_program::pubkey::Pubkey>,
    max_depth: Option<u32>,
    max_buffer_size: Option<u32>,
    __remaining_accounts: Vec<solana_program::instruction::AccountMeta>,
}

impl PrepareBatchMerkleTreeBuilder {
    pub fn new() -> Self {
        Self::default()
    }
    #[inline(always)]
    pub fn merkle_tree(&mut self, merkle_tree: solana_program::pubkey::Pubkey) -> &mut Self {
        self.merkle_tree = Some(merkle_tree);
        self
    }
    /// Authority that controls write-access to the tree
    /// Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
    #[inline(always)]
    pub fn authority(&mut self, authority: solana_program::pubkey::Pubkey) -> &mut Self {
        self.authority = Some(authority);
        self
    }
    /// Program used to emit changelogs as cpi instruction data.
    #[inline(always)]
    pub fn noop(&mut self, noop: solana_program::pubkey::Pubkey) -> &mut Self {
        self.noop = Some(noop);
        self
    }
    #[inline(always)]
    pub fn max_depth(&mut self, max_depth: u32) -> &mut Self {
        self.max_depth = Some(max_depth);
        self
    }
    #[inline(always)]
    pub fn max_buffer_size(&mut self, max_buffer_size: u32) -> &mut Self {
        self.max_buffer_size = Some(max_buffer_size);
        self
    }
    /// Add an aditional account to the instruction.
    #[inline(always)]
    pub fn add_remaining_account(
        &mut self,
        account: solana_program::instruction::AccountMeta,
    ) -> &mut Self {
        self.__remaining_accounts.push(account);
        self
    }
    /// Add additional accounts to the instruction.
    #[inline(always)]
    pub fn add_remaining_accounts(
        &mut self,
        accounts: &[solana_program::instruction::AccountMeta],
    ) -> &mut Self {
        self.__remaining_accounts.extend_from_slice(accounts);
        self
    }
    #[allow(clippy::clone_on_copy)]
    pub fn instruction(&self) -> solana_program::instruction::Instruction {
        let accounts = PrepareBatchMerkleTree {
            merkle_tree: self.merkle_tree.expect("merkle_tree is not set"),
            authority: self.authority.expect("authority is not set"),
            noop: self.noop.expect("noop is not set"),
        };
        let args = PrepareBatchMerkleTreeInstructionArgs {
            max_depth: self.max_depth.clone().expect("max_depth is not set"),
            max_buffer_size: self
                .max_buffer_size
                .clone()
                .expect("max_buffer_size is not set"),
        };

        accounts.instruction_with_remaining_accounts(args, &self.__remaining_accounts)
    }
}

/// `prepare_batch_merkle_tree` CPI accounts.
pub struct PrepareBatchMerkleTreeCpiAccounts<'a, 'b> {
    pub merkle_tree: &'b solana_program::account_info::AccountInfo<'a>,
    /// Authority that controls write-access to the tree
    /// Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
    pub authority: &'b solana_program::account_info::AccountInfo<'a>,
    /// Program used to emit changelogs as cpi instruction data.
    pub noop: &'b solana_program::account_info::AccountInfo<'a>,
}

/// `prepare_batch_merkle_tree` CPI instruction.
pub struct PrepareBatchMerkleTreeCpi<'a, 'b> {
    /// The program to invoke.
    pub __program: &'b solana_program::account_info::AccountInfo<'a>,

    pub merkle_tree: &'b solana_program::account_info::AccountInfo<'a>,
    /// Authority that controls write-access to the tree
    /// Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
    pub authority: &'b solana_program::account_info::AccountInfo<'a>,
    /// Program used to emit changelogs as cpi instruction data.
    pub noop: &'b solana_program::account_info::AccountInfo<'a>,
    /// The arguments for the instruction.
    pub __args: PrepareBatchMerkleTreeInstructionArgs,
}

impl<'a, 'b> PrepareBatchMerkleTreeCpi<'a, 'b> {
    pub fn new(
        program: &'b solana_program::account_info::AccountInfo<'a>,
        accounts: PrepareBatchMerkleTreeCpiAccounts<'a, 'b>,
        args: PrepareBatchMerkleTreeInstructionArgs,
    ) -> Self {
        Self {
            __program: program,
            merkle_tree: accounts.merkle_tree,
            authority: accounts.authority,
            noop: accounts.noop,
            __args: args,
        }
    }
    #[inline(always)]
    pub fn invoke(&self) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed_with_remaining_accounts(&[], &[])
    }
    #[inline(always)]
    pub fn invoke_with_remaining_accounts(
        &self,
        remaining_accounts: &[(
            &'b solana_program::account_info::AccountInfo<'a>,
            bool,
            bool,
        )],
    ) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed_with_remaining_accounts(&[], remaining_accounts)
    }
    #[inline(always)]
    pub fn invoke_signed(
        &self,
        signers_seeds: &[&[&[u8]]],
    ) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed_with_remaining_accounts(signers_seeds, &[])
    }
    #[allow(clippy::clone_on_copy)]
    #[allow(clippy::vec_init_then_push)]
    pub fn invoke_signed_with_remaining_accounts(
        &self,
        signers_seeds: &[&[&[u8]]],
        remaining_accounts: &[(
            &'b solana_program::account_info::AccountInfo<'a>,
            bool,
            bool,
        )],
    ) -> solana_program::entrypoint::ProgramResult {
        let mut accounts = Vec::with_capacity(3 + remaining_accounts.len());
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.merkle_tree.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.authority.key,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.noop.key,
            false,
        ));
        remaining_accounts.iter().for_each(|remaining_account| {
            accounts.push(solana_program::instruction::AccountMeta {
                pubkey: *remaining_account.0.key,
                is_signer: remaining_account.1,
                is_writable: remaining_account.2,
            })
        });
        let mut data = PrepareBatchMerkleTreeInstructionData::new()
            .try_to_vec()
            .unwrap();
        let mut args = self.__args.try_to_vec().unwrap();
        data.append(&mut args);

        let instruction = solana_program::instruction::Instruction {
            program_id: crate::SPL_ACCOUNT_COMPRESSION_ID,
            accounts,
            data,
        };
        let mut account_infos = Vec::with_capacity(3 + 1 + remaining_accounts.len());
        account_infos.push(self.__program.clone());
        account_infos.push(self.merkle_tree.clone());
        account_infos.push(self.authority.clone());
        account_infos.push(self.noop.clone());
        remaining_accounts
            .iter()
            .for_each(|remaining_account| account_infos.push(remaining_account.0.clone()));

        if signers_seeds.is_empty() {
            solana_program::program::invoke(&instruction, &account_infos)
        } else {
            solana_program::program::invoke_signed(&instruction, &account_infos, signers_seeds)
        }
    }
}

/// `prepare_batch_merkle_tree` CPI instruction builder.
pub struct PrepareBatchMerkleTreeCpiBuilder<'a, 'b> {
    instruction: Box<PrepareBatchMerkleTreeCpiBuilderInstruction<'a, 'b>>,
}

impl<'a, 'b> PrepareBatchMerkleTreeCpiBuilder<'a, 'b> {
    pub fn new(program: &'b solana_program::account_info::AccountInfo<'a>) -> Self {
        let instruction = Box::new(PrepareBatchMerkleTreeCpiBuilderInstruction {
            __program: program,
            merkle_tree: None,
            authority: None,
            noop: None,
            max_depth: None,
            max_buffer_size: None,
            __remaining_accounts: Vec::new(),
        });
        Self { instruction }
    }
    #[inline(always)]
    pub fn merkle_tree(
        &mut self,
        merkle_tree: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.merkle_tree = Some(merkle_tree);
        self
    }
    /// Authority that controls write-access to the tree
    /// Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs.
    #[inline(always)]
    pub fn authority(
        &mut self,
        authority: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.authority = Some(authority);
        self
    }
    /// Program used to emit changelogs as cpi instruction data.
    #[inline(always)]
    pub fn noop(&mut self, noop: &'b solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.noop = Some(noop);
        self
    }
    #[inline(always)]
    pub fn max_depth(&mut self, max_depth: u32) -> &mut Self {
        self.instruction.max_depth = Some(max_depth);
        self
    }
    #[inline(always)]
    pub fn max_buffer_size(&mut self, max_buffer_size: u32) -> &mut Self {
        self.instruction.max_buffer_size = Some(max_buffer_size);
        self
    }
    /// Add an additional account to the instruction.
    #[inline(always)]
    pub fn add_remaining_account(
        &mut self,
        account: &'b solana_program::account_info::AccountInfo<'a>,
        is_writable: bool,
        is_signer: bool,
    ) -> &mut Self {
        self.instruction
            .__remaining_accounts
            .push((account, is_writable, is_signer));
        self
    }
    /// Add additional accounts to the instruction.
    ///
    /// Each account is represented by a tuple of the `AccountInfo`, a `bool` indicating whether the account is writable or not,
    /// and a `bool` indicating whether the account is a signer or not.
    #[inline(always)]
    pub fn add_remaining_accounts(
        &mut self,
        accounts: &[(
            &'b solana_program::account_info::AccountInfo<'a>,
            bool,
            bool,
        )],
    ) -> &mut Self {
        self.instruction
            .__remaining_accounts
            .extend_from_slice(accounts);
        self
    }
    #[inline(always)]
    pub fn invoke(&self) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed(&[])
    }
    #[allow(clippy::clone_on_copy)]
    #[allow(clippy::vec_init_then_push)]
    pub fn invoke_signed(
        &self,
        signers_seeds: &[&[&[u8]]],
    ) -> solana_program::entrypoint::ProgramResult {
        let args = PrepareBatchMerkleTreeInstructionArgs {
            max_depth: self
                .instruction
                .max_depth
                .clone()
                .expect("max_depth is not set"),
            max_buffer_size: self
                .instruction
                .max_buffer_size
                .clone()
                .expect("max_buffer_size is not set"),
        };
        let instruction = PrepareBatchMerkleTreeCpi {
            __program: self.instruction.__program,

            merkle_tree: self
                .instruction
                .merkle_tree
                .expect("merkle_tree is not set"),

            authority: self.instruction.authority.expect("authority is not set"),

            noop: self.instruction.noop.expect("noop is not set"),
            __args: args,
        };
        instruction.invoke_signed_with_remaining_accounts(
            signers_seeds,
            &self.instruction.__remaining_accounts,
        )
    }
}

struct PrepareBatchMerkleTreeCpiBuilderInstruction<'a, 'b> {
    __program: &'b solana_program::account_info::AccountInfo<'a>,
    merkle_tree: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    authority: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    noop: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    max_depth: Option<u32>,
    max_buffer_size: Option<u32>,
    /// Additional instruction accounts `(AccountInfo, is_writable, is_signer)`.
    __remaining_accounts: Vec<(
        &'b solana_program::account_info::AccountInfo<'a>,
        bool,
        bool,
    )>,
}

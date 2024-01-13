/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.71.0
  Forc version: 0.48.1
  Fuel-Core version: 0.22.0
*/

import type {
  BigNumberish,
  BN,
  BytesLike,
  Contract,
  DecodedValue,
  FunctionFragment,
  Interface,
  InvokeFunction,
} from 'fuels';

import type { Option, Vec } from "./common";

export type AddressInput = { value: string };
export type AddressOutput = AddressInput;
export type ContractIdInput = { value: string };
export type ContractIdOutput = ContractIdInput;

export type GasPredicateAbiConfigurables = {
  SIGNER: AddressInput;
  NFT_CONTRACT_ID: ContractIdInput;
  PACKET_MINTER_CONTRACT_ID: ContractIdInput;
  EXPECTED_SCRIPT_BYTECODE_HASH: string;
};

interface GasPredicateAbiInterface extends Interface {
  functions: {
    main: FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'main', values: [Vec<string>, Option<BigNumberish>]): Uint8Array;

  decodeFunctionData(functionFragment: 'main', data: BytesLike): DecodedValue;
}

export class GasPredicateAbi extends Contract {
  interface: GasPredicateAbiInterface;
  functions: {
    main: InvokeFunction<[sub_ids: Vec<string>, signature_index: Option<BigNumberish>], boolean>;
  };
}

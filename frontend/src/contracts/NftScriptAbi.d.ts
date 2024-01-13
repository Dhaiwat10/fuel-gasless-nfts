/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.71.0
  Forc version: 0.48.1
  Fuel-Core version: 0.22.0
*/

import type {
  BytesLike,
  Contract,
  DecodedValue,
  FunctionFragment,
  Interface,
  InvokeFunction,
} from 'fuels';

export type AddressInput = { value: string };
export type AddressOutput = AddressInput;
export type ContractIdInput = { value: string };
export type ContractIdOutput = ContractIdInput;

export type NftScriptAbiConfigurables = {
  NFT_CONTRACT: ContractIdInput;
  PACKET_MINTER_CONTRACT: ContractIdInput;
};

interface NftScriptAbiInterface extends Interface {
  functions: {
    main: FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'main', values: [AddressInput, boolean]): Uint8Array;

  decodeFunctionData(functionFragment: 'main', data: BytesLike): DecodedValue;
}

export class NftScriptAbi extends Contract {
  interface: NftScriptAbiInterface;
  functions: {
    main: InvokeFunction<[recipient: AddressInput, mint: boolean], void>;
  };
}

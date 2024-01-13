/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.71.0
  Forc version: 0.48.1
  Fuel-Core version: 0.22.0
*/

import { Interface, Contract, ContractFactory } from "fuels";
import type { Provider, Account, AbstractAddress, BytesLike, DeployContractOptions, StorageSlot } from "fuels";
import type { PacketPredicateAbi, PacketPredicateAbiInterface } from "../PacketPredicateAbi";

const _abi = {
  "types": [
    {
      "typeId": 0,
      "type": "()",
      "components": [],
      "typeParameters": null
    },
    {
      "typeId": 1,
      "type": "b256",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 2,
      "type": "bool",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 3,
      "type": "enum Option",
      "components": [
        {
          "name": "None",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "Some",
          "type": 4,
          "typeArguments": null
        }
      ],
      "typeParameters": [
        4
      ]
    },
    {
      "typeId": 4,
      "type": "generic T",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 5,
      "type": "struct Address",
      "components": [
        {
          "name": "value",
          "type": 1,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 6,
      "type": "u64",
      "components": null,
      "typeParameters": null
    }
  ],
  "functions": [
    {
      "inputs": [
        {
          "name": "signature_witness_id",
          "type": 3,
          "typeArguments": [
            {
              "name": "",
              "type": 6,
              "typeArguments": null
            }
          ]
        }
      ],
      "name": "main",
      "output": {
        "name": "",
        "type": 2,
        "typeArguments": null
      },
      "attributes": null
    }
  ],
  "loggedTypes": [],
  "messagesTypes": [],
  "configurables": [
    {
      "name": "SIGNER",
      "configurableType": {
        "name": "",
        "type": 5,
        "typeArguments": []
      },
      "offset": 5760
    }
  ]
};

const _storageSlots: StorageSlot[] = [];

export class PacketPredicateAbi__factory {
  static readonly abi = _abi;

  static readonly storageSlots = _storageSlots;

  static createInterface(): PacketPredicateAbiInterface {
    return new Interface(_abi) as unknown as PacketPredicateAbiInterface
  }

  static connect(
    id: string | AbstractAddress,
    accountOrProvider: Account | Provider
  ): PacketPredicateAbi {
    return new Contract(id, _abi, accountOrProvider) as unknown as PacketPredicateAbi
  }

  static async deployContract(
    bytecode: BytesLike,
    wallet: Account,
    options: DeployContractOptions = {}
  ): Promise<PacketPredicateAbi> {
    const factory = new ContractFactory(bytecode, _abi, wallet);

    const { storageSlots } = PacketPredicateAbi__factory;

    const contract = await factory.deployContract({
      storageSlots,
      ...options,
    });

    return contract as unknown as PacketPredicateAbi;
  }
}

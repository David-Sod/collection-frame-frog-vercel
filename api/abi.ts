export const abi = {
  contractAddress: "0xEaDaF03483365c89E5Ec447a390Db0C605F4A2C7",
  tag: "emprops-eth-contracts@collection:0.14.0",
  blockchain: "ETHEREUM",
  abi: [
    {
      type: "constructor",
      inputs: [
        {
          name: "isCreatorsOnly",
          type: "bool",
          internalType: "bool",
        },
        {
          name: "listCreators",
          type: "address[]",
          internalType: "address[]",
        },
        {
          name: "_origen",
          type: "uint8",
          internalType: "enum EmpropsCollectionContract.Origen",
        },
        {
          name: "initialCollectionId",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "config",
          type: "tuple",
          components: [
            {
              name: "maxCollectionSize",
              type: "uint32",
              internalType: "uint32",
            },
            {
              name: "minMintPrice",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "maxBatchMintSize",
              type: "uint32",
              internalType: "uint32",
            },
          ],
          internalType: "struct EmpropsCollectionContract.PlatformConfig",
        },
      ],
      signature: "constructor",
      stateMutability: "nonpayable",
    },
    {
      name: "CollectionCreated",
      type: "event",
      inputs: [
        {
          name: "id",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "author",
          type: "address",
          indexed: false,
          internalType: "address",
        },
        {
          name: "price",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "editions",
          type: "uint64",
          indexed: false,
          internalType: "uint64",
        },
        {
          name: "royalty",
          type: "uint16",
          indexed: false,
          internalType: "uint16",
        },
        {
          name: "freeMinter",
          type: "address",
          indexed: false,
          internalType: "address",
        },
        {
          name: "status",
          type: "uint8",
          indexed: false,
          internalType: "uint8",
        },
        {
          name: "metadata",
          type: "string",
          indexed: false,
          internalType: "string",
        },
        {
          name: "tokenContractAddress",
          type: "address",
          indexed: false,
          internalType: "address",
        },
      ],
      anonymous: false,
      signature:
        "0x422dfbdf1a1b63fbfa8d81658c0040263d15a83614136e98d4e9093f7c5d096f",
    },
    {
      name: "OwnershipTransferStarted",
      type: "event",
      inputs: [
        {
          name: "previousOwner",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "newOwner",
          type: "address",
          indexed: true,
          internalType: "address",
        },
      ],
      anonymous: false,
      signature:
        "0x38d16b8cac22d99fc7c124b9cd0de2d3fa1faef420bfe791d8c362d765e22700",
    },
    {
      name: "OwnershipTransferred",
      type: "event",
      inputs: [
        {
          name: "previousOwner",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "newOwner",
          type: "address",
          indexed: true,
          internalType: "address",
        },
      ],
      anonymous: false,
      signature:
        "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0",
    },
    {
      name: "Paused",
      type: "event",
      inputs: [
        {
          name: "account",
          type: "address",
          indexed: false,
          internalType: "address",
        },
      ],
      anonymous: false,
      signature:
        "0x62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258",
    },
    {
      name: "Unpaused",
      type: "event",
      inputs: [
        {
          name: "account",
          type: "address",
          indexed: false,
          internalType: "address",
        },
      ],
      anonymous: false,
      signature:
        "0x5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa",
    },
    {
      name: "acceptOwnership",
      type: "function",
      inputs: [],
      outputs: [],
      signature: "0x79ba5097",
      stateMutability: "nonpayable",
    },
    {
      name: "accounts",
      type: "function",
      inputs: [
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "",
          type: "address",
          internalType: "address",
        },
      ],
      outputs: [
        {
          name: "allowlistCount",
          type: "uint32",
          internalType: "uint32",
        },
        {
          name: "freelistCount",
          type: "uint32",
          internalType: "uint32",
        },
        {
          name: "fundsClaimed",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "rate",
          type: "uint16",
          internalType: "uint16",
        },
      ],
      constant: true,
      signature: "0x58e271de",
      stateMutability: "view",
    },
    {
      name: "collectionIdCount",
      type: "function",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      constant: true,
      signature: "0x53b2df83",
      stateMutability: "view",
    },
    {
      name: "collections",
      type: "function",
      inputs: [
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      outputs: [
        {
          name: "author",
          type: "address",
          internalType: "address",
        },
        {
          name: "price",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "editions",
          type: "uint64",
          internalType: "uint64",
        },
        {
          name: "royaltyAddress",
          type: "address",
          internalType: "address",
        },
        {
          name: "royalty",
          type: "uint16",
          internalType: "uint16",
        },
        {
          name: "freeMinter",
          type: "address",
          internalType: "address",
        },
        {
          name: "status",
          type: "uint8",
          internalType: "uint8",
        },
        {
          name: "metadata",
          type: "string",
          internalType: "string",
        },
        {
          name: "mintMode",
          type: "uint8",
          internalType: "enum EmpropsCollectionContract.MintMode",
        },
        {
          name: "allowlist",
          type: "bytes32",
          internalType: "bytes32",
        },
        {
          name: "freelist",
          type: "bytes32",
          internalType: "bytes32",
        },
        {
          name: "tokenContractAddress",
          type: "address",
          internalType: "address",
        },
      ],
      constant: true,
      signature: "0xfdbda0ec",
      stateMutability: "view",
    },
    {
      name: "collectionsConfig",
      type: "function",
      inputs: [
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      outputs: [
        {
          name: "enableBatchMint",
          type: "bool",
          internalType: "bool",
        },
        {
          name: "maxBatchMintAllowed",
          type: "uint64",
          internalType: "uint64",
        },
        {
          name: "startDate",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "endDate",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      constant: true,
      signature: "0x938a7c72",
      stateMutability: "view",
    },
    {
      name: "creators",
      type: "function",
      inputs: [
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      outputs: [
        {
          name: "",
          type: "address",
          internalType: "address",
        },
      ],
      constant: true,
      signature: "0xcd53d08e",
      stateMutability: "view",
    },
    {
      name: "creatorsOnly",
      type: "function",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "bool",
          internalType: "bool",
        },
      ],
      constant: true,
      signature: "0x5f81d989",
      stateMutability: "view",
    },
    {
      name: "fundsCollected",
      type: "function",
      inputs: [
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      outputs: [
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      constant: true,
      signature: "0x2f27f19a",
      stateMutability: "view",
    },
    {
      name: "mintCount",
      type: "function",
      inputs: [
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      outputs: [
        {
          name: "",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      constant: true,
      signature: "0xfa1100f4",
      stateMutability: "view",
    },
    {
      name: "origen",
      type: "function",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "uint8",
          internalType: "enum EmpropsCollectionContract.Origen",
        },
      ],
      constant: true,
      signature: "0x2d8e5b32",
      stateMutability: "view",
    },
    {
      name: "owner",
      type: "function",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "address",
          internalType: "address",
        },
      ],
      constant: true,
      signature: "0x8da5cb5b",
      stateMutability: "view",
    },
    {
      name: "paused",
      type: "function",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "bool",
          internalType: "bool",
        },
      ],
      constant: true,
      signature: "0x5c975abb",
      stateMutability: "view",
    },
    {
      name: "pendingOwner",
      type: "function",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "address",
          internalType: "address",
        },
      ],
      constant: true,
      signature: "0xe30c3978",
      stateMutability: "view",
    },
    {
      name: "platformConfig",
      type: "function",
      inputs: [],
      outputs: [
        {
          name: "maxCollectionSize",
          type: "uint32",
          internalType: "uint32",
        },
        {
          name: "minMintPrice",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "maxBatchMintSize",
          type: "uint32",
          internalType: "uint32",
        },
      ],
      constant: true,
      signature: "0x4d24e236",
      stateMutability: "view",
    },
    {
      name: "renounceOwnership",
      type: "function",
      inputs: [],
      outputs: [],
      signature: "0x715018a6",
      stateMutability: "nonpayable",
    },
    {
      name: "transferOwnership",
      type: "function",
      inputs: [
        {
          name: "newOwner",
          type: "address",
          internalType: "address",
        },
      ],
      outputs: [],
      signature: "0xf2fde38b",
      stateMutability: "nonpayable",
    },
    {
      name: "setPaused",
      type: "function",
      inputs: [
        {
          name: "paused",
          type: "bool",
          internalType: "bool",
        },
      ],
      outputs: [],
      signature: "0x16c38b3c",
      stateMutability: "nonpayable",
    },
    {
      name: "setPlatformConfig",
      type: "function",
      inputs: [
        {
          name: "config",
          type: "tuple",
          components: [
            {
              name: "maxCollectionSize",
              type: "uint32",
              internalType: "uint32",
            },
            {
              name: "minMintPrice",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "maxBatchMintSize",
              type: "uint32",
              internalType: "uint32",
            },
          ],
          internalType: "struct EmpropsCollectionContract.PlatformConfig",
        },
      ],
      outputs: [],
      signature: "0x010dddc0",
      stateMutability: "nonpayable",
    },
    {
      name: "setCreators",
      type: "function",
      inputs: [
        {
          name: "newCreators",
          type: "address[]",
          internalType: "address[]",
        },
      ],
      outputs: [],
      signature: "0x6d7294d9",
      stateMutability: "nonpayable",
    },
    {
      name: "createCollection",
      type: "function",
      inputs: [
        {
          name: "collection",
          type: "tuple",
          components: [
            {
              name: "author",
              type: "address",
              internalType: "address",
            },
            {
              name: "price",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "editions",
              type: "uint64",
              internalType: "uint64",
            },
            {
              name: "royaltyAddress",
              type: "address",
              internalType: "address",
            },
            {
              name: "royalty",
              type: "uint16",
              internalType: "uint16",
            },
            {
              name: "freeMinter",
              type: "address",
              internalType: "address",
            },
            {
              name: "status",
              type: "uint8",
              internalType: "uint8",
            },
            {
              name: "metadata",
              type: "string",
              internalType: "string",
            },
            {
              name: "mintMode",
              type: "uint8",
              internalType: "enum EmpropsCollectionContract.MintMode",
            },
            {
              name: "allowlist",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "freelist",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "tokenContractAddress",
              type: "address",
              internalType: "address",
            },
          ],
          internalType: "struct EmpropsCollectionContract.Collection",
        },
        {
          name: "collectionConfig",
          type: "tuple",
          components: [
            {
              name: "enableBatchMint",
              type: "bool",
              internalType: "bool",
            },
            {
              name: "maxBatchMintAllowed",
              type: "uint64",
              internalType: "uint64",
            },
            {
              name: "startDate",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "endDate",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          internalType: "struct EmpropsCollectionContract.CollectionConfig",
        },
        {
          name: "primarySaleReceivers",
          type: "tuple[]",
          components: [
            {
              name: "addr",
              type: "address",
              internalType: "address",
            },
            {
              name: "rate",
              type: "uint16",
              internalType: "uint16",
            },
          ],
          internalType: "struct EmpropsCollectionContract.FundReceiver[]",
        },
      ],
      outputs: [],
      signature: "0x01500637",
      stateMutability: "nonpayable",
    },
    {
      name: "setStatus",
      type: "function",
      inputs: [
        {
          name: "collectionId",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "status",
          type: "uint8",
          internalType: "uint8",
        },
      ],
      outputs: [],
      signature: "0xd896dd64",
      stateMutability: "nonpayable",
    },
    {
      name: "setTotalEditions",
      type: "function",
      inputs: [
        {
          name: "collectionId",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "newEditions",
          type: "uint64",
          internalType: "uint64",
        },
      ],
      outputs: [],
      signature: "0xdb54b6d1",
      stateMutability: "nonpayable",
    },
    {
      name: "setPrice",
      type: "function",
      inputs: [
        {
          name: "collectionId",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "price",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      outputs: [],
      signature: "0xf7d97577",
      stateMutability: "nonpayable",
    },
    {
      name: "setMode",
      type: "function",
      inputs: [
        {
          name: "collectionId",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "mode",
          type: "uint8",
          internalType: "enum EmpropsCollectionContract.MintMode",
        },
      ],
      outputs: [],
      signature: "0x0a402f3e",
      stateMutability: "nonpayable",
    },
    {
      name: "setAllowlist",
      type: "function",
      inputs: [
        {
          name: "collectionId",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "allowlist",
          type: "bytes32",
          internalType: "bytes32",
        },
      ],
      outputs: [],
      signature: "0x4d02bf92",
      stateMutability: "nonpayable",
    },
    {
      name: "setFreelist",
      type: "function",
      inputs: [
        {
          name: "collectionId",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "freelist",
          type: "bytes32",
          internalType: "bytes32",
        },
      ],
      outputs: [],
      signature: "0x1e6e16bd",
      stateMutability: "nonpayable",
    },
    {
      name: "setFreeMinter",
      type: "function",
      inputs: [
        {
          name: "collectionId",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "freeMinter",
          type: "address",
          internalType: "address",
        },
      ],
      outputs: [],
      signature: "0xb38ab76e",
      stateMutability: "nonpayable",
    },
    {
      name: "mint",
      type: "function",
      inputs: [
        {
          name: "collectionId",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "owner",
          type: "address",
          internalType: "address",
        },
        {
          name: "proof",
          type: "bytes32[]",
          internalType: "bytes32[]",
        },
        {
          name: "quantityToMint",
          type: "uint32",
          internalType: "uint32",
        },
        {
          name: "maxQuantityAllowed",
          type: "uint32",
          internalType: "uint32",
        },
      ],
      outputs: [],
      payable: true,
      signature: "0x2bba333f",
      stateMutability: "payable",
    },
    {
      name: "freeMint",
      type: "function",
      inputs: [
        {
          name: "collectionId",
          type: "uint256",
          internalType: "uint256",
        },
        {
          name: "owner",
          type: "address",
          internalType: "address",
        },
        {
          name: "proof",
          type: "bytes32[]",
          internalType: "bytes32[]",
        },
        {
          name: "quantityToMint",
          type: "uint32",
          internalType: "uint32",
        },
        {
          name: "maxQuantityAllowed",
          type: "uint32",
          internalType: "uint32",
        },
      ],
      outputs: [],
      signature: "0x32500527",
      stateMutability: "nonpayable",
    },
    {
      name: "withdrawFunds",
      type: "function",
      inputs: [
        {
          name: "collectionId",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      outputs: [],
      signature: "0x155dd5ee",
      stateMutability: "nonpayable",
    },
  ],
  abiLink: null,
  createdAt: "2024-05-17T19:54:10.993",
};

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<f0902139f4fb2b2f381ddf32258c373b>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
import astrologicalSignHouseResolver from "../resolvers/AstrologicalSignHouseResolver.js";
import astrologicalSignNameResolver from "../resolvers/AstrologicalSignNameResolver.js";
export type ClientEdgeToClientObjectTest1Query$variables = {||};
export type ClientEdgeToClientObjectTest1Query$data = {|
  +me: ?{|
    +astrological_sign: ?{|
      +__id: string,
      +house: ?$Call<<R>((...empty[]) => R) => R, typeof astrologicalSignHouseResolver>,
      +name: ?$Call<<R>((...empty[]) => R) => R, typeof astrologicalSignNameResolver>,
      +opposite: ?{|
        +__id: string,
        +house: ?$Call<<R>((...empty[]) => R) => R, typeof astrologicalSignHouseResolver>,
        +name: ?$Call<<R>((...empty[]) => R) => R, typeof astrologicalSignNameResolver>,
        +opposite: ?{|
          +__id: string,
          +name: ?$Call<<R>((...empty[]) => R) => R, typeof astrologicalSignNameResolver>,
        |},
      |},
    |},
  |},
|};
export type ClientEdgeToClientObjectTest1Query = {|
  response: ClientEdgeToClientObjectTest1Query$data,
  variables: ClientEdgeToClientObjectTest1Query$variables,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "fragment": {
    "args": null,
    "kind": "FragmentSpread",
    "name": "AstrologicalSignNameResolver"
  },
  "kind": "RelayResolver",
  "name": "name",
  "resolverModule": require('./../resolvers/AstrologicalSignNameResolver.js'),
  "path": "me.name"
},
v2 = {
  "alias": null,
  "args": null,
  "fragment": {
    "args": null,
    "kind": "FragmentSpread",
    "name": "AstrologicalSignHouseResolver"
  },
  "kind": "RelayResolver",
  "name": "house",
  "resolverModule": require('./../resolvers/AstrologicalSignHouseResolver.js'),
  "path": "me.house"
},
v3 = {
  "alias": null,
  "args": null,
  "fragment": {
    "args": null,
    "kind": "FragmentSpread",
    "name": "AstrologicalSignOppositeResolver"
  },
  "kind": "RelayResolver",
  "name": "opposite",
  "resolverModule": require('./../resolvers/AstrologicalSignOppositeResolver.js'),
  "path": "me.opposite"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": {
      "hasClientEdges": true
    },
    "name": "ClientEdgeToClientObjectTest1Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "kind": "ClientEdgeToClientObject",
            "concreteType": "AstrologicalSign",
            "backingField": {
              "alias": null,
              "args": null,
              "fragment": {
                "args": null,
                "kind": "FragmentSpread",
                "name": "UserAstrologicalSignResolver"
              },
              "kind": "RelayResolver",
              "name": "astrological_sign",
              "resolverModule": require('./../resolvers/UserAstrologicalSignResolver.js'),
              "path": "me.astrological_sign"
            },
            "linkedField": {
              "alias": null,
              "args": null,
              "concreteType": "AstrologicalSign",
              "kind": "LinkedField",
              "name": "astrological_sign",
              "plural": false,
              "selections": [
                (v0/*: any*/),
                (v1/*: any*/),
                (v2/*: any*/),
                {
                  "kind": "ClientEdgeToClientObject",
                  "concreteType": "AstrologicalSign",
                  "backingField": (v3/*: any*/),
                  "linkedField": {
                    "alias": null,
                    "args": null,
                    "concreteType": "AstrologicalSign",
                    "kind": "LinkedField",
                    "name": "opposite",
                    "plural": false,
                    "selections": [
                      (v0/*: any*/),
                      (v1/*: any*/),
                      (v2/*: any*/),
                      {
                        "kind": "ClientEdgeToClientObject",
                        "concreteType": "AstrologicalSign",
                        "backingField": (v3/*: any*/),
                        "linkedField": {
                          "alias": null,
                          "args": null,
                          "concreteType": "AstrologicalSign",
                          "kind": "LinkedField",
                          "name": "opposite",
                          "plural": false,
                          "selections": [
                            (v0/*: any*/),
                            (v1/*: any*/)
                          ],
                          "storageKey": null
                        }
                      }
                    ],
                    "storageKey": null
                  }
                }
              ],
              "storageKey": null
            }
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ClientEdgeToClientObjectTest1Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Date",
            "kind": "LinkedField",
            "name": "birthdate",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "month",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "day",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "635bfa029f7924c62673e82fa8c7fd8c",
    "id": null,
    "metadata": {},
    "name": "ClientEdgeToClientObjectTest1Query",
    "operationKind": "query",
    "text": "query ClientEdgeToClientObjectTest1Query {\n  me {\n    ...UserAstrologicalSignResolver\n    id\n  }\n}\n\nfragment UserAstrologicalSignResolver on User {\n  birthdate {\n    month\n    day\n  }\n}\n"
  }
};
})();

if (__DEV__) {
  (node/*: any*/).hash = "9eb5b7395eb332f56c571706e3dd725a";
}

module.exports = ((node/*: any*/)/*: Query<
  ClientEdgeToClientObjectTest1Query$variables,
  ClientEdgeToClientObjectTest1Query$data,
>*/);
/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.71.0
  Forc version: 0.48.1
  Fuel-Core version: 0.22.0
*/

/*
  Mimics Sway Enum, requires at least one Key-Value but
  does not raise error on multiple pairs.
  This is done in the abi-coder
*/
export type Enum<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

/*
  Mimics Sway Option and Vectors.
  Vectors are treated like arrays in Typescript.
*/
export type Option<T> = T | undefined;

export type Vec<T> = T[];

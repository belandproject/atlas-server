import { EventEmitter } from 'events'
import { Tile } from '../map/types'

export type ApiConfig = {
  API_URL: string
  API_BATCH_SIZE: number
  API_CONCURRENCY: number
  IMAGE_BASE_URL: string
  EXTERNAL_BASE_URL: string
  LAND_CONTRACT_ADDRESS: string
  ESTATE_CONTRACT_ADDRESS: string
}

export enum ApiEvents {
  PROGRESS = 'progress',
}

export type Batch = { tiles: Tile[]; parcels: NFT[]; estates: NFT[] }
export type Result = Batch & { updatedAt: number }

export type NFT = {
  id: string
  name: string
  description: string
  image: string
  external_url: string
  background_color: string
  attributes: Attribute[]
}

export type Attribute = {
  trait_type: string
  value: number
  display_type: 'number'
}

export interface IApiComponent {
  events: EventEmitter
  fetchData: () => Promise<Result>
  fetchUpdatedData: (updatedAfter: number) => Promise<Result>
}

export type OrderFragment = {
  price: string
  expiresAt: string
}

export type EstateFragment = {
  updatedAt: string
  parcels: ParcelFragment[]
}

export type ParcelFragment = {
  id: string
  name: string | null
  description: string | null
  updatedAt: string
  owner: string
  x: string
  y: string
  estate: {
    id: string
    name: string | null
    description: string | null
    owner: string | null
    updatedAt: string
    parcels: { x: string; y: string }[]
    size: number
  } | null
}

export type Proximity = {
  district?: number
  road?: number
  plaza?: number
}

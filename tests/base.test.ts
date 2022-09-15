import * as fs from 'fs'
import MagicString from 'magic-string'
import parse from 'url-parse'
import { expect, test } from 'vitest'

const originalTypes = `
 interface RootObject {
  result: Result;
  code: number;
}


 interface RootObject {
  result: Result;
  code: number;
}
interface Result {
  songs: Song[];
  hasMore: boolean;
  songCount: number;
}
interface Song {
  id: number;
  name: string;
  artists: Artist[];
  album: Album;
  duration: number;
  copyrightId: number;
  status: number;
  alias: any[];
  rtype: number;
  ftype: number;
  mvid: number;
  fee: number;
  rUrl?: any;
  mark: number;
}
interface Album {
  id: number;
  name: string;
  artist: Artist;
  publishTime: number;
  size: number;
  copyrightId: number;
  status: number;
  picId: number;
  mark: number;
}
interface Artist {
  id: number;
  name: string;
  picUrl?: any;
  alias: any[];
  albumSize: number;
  picId: number;
  fansGroup?: any;
  img1v1Url: string;
  img1v1: number;
  trans?: any;
}`

test('url-parse', () => {
  const res = parse('/api/song?id=1')

  expect(res).toMatchInlineSnapshot(`
    {
      "auth": "",
      "hash": "",
      "host": "",
      "hostname": "",
      "href": "/api/song?id=1",
      "origin": "null",
      "password": "",
      "pathname": "/api/song",
      "port": "",
      "protocol": "",
      "query": "?id=1",
      "slashes": false,
      "username": "",
    }
  `)
})

test('transform', () => {
  const code = new MagicString(originalTypes)

  expect(code.prepend('declare ').toString()).toMatchInlineSnapshot(`
    "declare 
     interface RootObject {
      result: Result;
      code: number;
    }


     interface RootObject {
      result: Result;
      code: number;
    }
    interface Result {
      songs: Song[];
      hasMore: boolean;
      songCount: number;
    }
    interface Song {
      id: number;
      name: string;
      artists: Artist[];
      album: Album;
      duration: number;
      copyrightId: number;
      status: number;
      alias: any[];
      rtype: number;
      ftype: number;
      mvid: number;
      fee: number;
      rUrl?: any;
      mark: number;
    }
    interface Album {
      id: number;
      name: string;
      artist: Artist;
      publishTime: number;
      size: number;
      copyrightId: number;
      status: number;
      picId: number;
      mark: number;
    }
    interface Artist {
      id: number;
      name: string;
      picUrl?: any;
      alias: any[];
      albumSize: number;
      picId: number;
      fansGroup?: any;
      img1v1Url: string;
      img1v1: number;
      trans?: any;
    }"
  `)

  expect(fs.existsSync('alias.ts')).toMatchInlineSnapshot('true')
})

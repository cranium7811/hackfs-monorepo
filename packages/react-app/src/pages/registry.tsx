import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { parseEther } from 'ethers/lib/utils'
import Image from 'next/image'
import axios from 'axios'
import Typography from '../components/Typography'

export default function Registry() {

  return (
    <>
      <Head>
        <title>Registry | FungyProof</title>
        <meta name="description" content="FungyProof" />
      </Head>

      <div className="w-full max-w-2xl p-4 mb-3 rounded">
        Token registry (List of Tokens)
      </div>
    </>
  )
}

'use client'

import { useState } from 'react'

const marketplaces = [
  { name: 'Flipkart', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e5/Flipkart_logo_%282026%29.svg/960px-Flipkart_logo_%282026%29.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', short: 'Flipkart', tint: 'flipkart', summary: 'Get your catalogue, listings, and seller operations ready to grow on Flipkart.' },
  { name: 'Amazon', image: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original', short: 'Amazon', tint: 'amazon', summary: 'Strengthen your Amazon presence with practical listing and account support.' },
  { name: 'Meesho', image: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Meesho_logo.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original', short: 'Meesho', tint: 'meesho', summary: 'Get help organising products and managing the details of selling on Meesho.' },
  { name: 'Myntra', image: 'https://cdn.iconscout.com/icon/free/png-512/free-myntra-icon-svg-download-png-2249158.png?f=webp&w=512', short: 'Myntra', tint: 'myntra', summary: 'Plan a more considered catalogue and marketplace workflow for Myntra.' },
]

export default function MarketplaceExplorer() {
  const [selected, setSelected] = useState(marketplaces[0])

  return (
    <div className="marketplace-explorer">
      <div className="marketplace-row" aria-label="Choose a marketplace">
        {marketplaces.map(({ name, image, short, tint }, index) => (
          <button
            key={name}
            className={`marketplace-badge ${tint}${selected.name === name ? ' is-selected' : ''}`}
            type="button"
            aria-label={`${name} marketplace`}
            aria-pressed={selected.name === name}
            onClick={() => setSelected(marketplaces[index])}
          >
            {image ? <img src={image} alt="" className="marketplace-logo" /> : <span className="marketplace-mark">{short}</span>}
            {short && <span>{name}</span>}
          </button>
        ))}
      </div>
      <p className="marketplace-selection" key={selected.name}><span>{selected.name}</span>{selected.summary}</p>
    </div>
  )
}
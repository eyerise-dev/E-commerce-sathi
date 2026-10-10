import {
  ClipboardCheck,
  CloudUpload,
  Headset,
  PackageSearch,
  ShieldCheck,
  Store,
  Target,
  UsersRound,
} from 'lucide-react'

export const services = [
  {
    number: '01',
    icon: UsersRound,
    title: 'Seller connect & onboarding',
    text: 'Get set up with guided onboarding and a clear plan for your marketplace launch.',
  },
  {
    number: '02',
    icon: Store,
    title: 'Marketplace registration support',
    text: 'Support with marketplace registration and the steps needed to get your account ready.',
  },
  {
    number: '03',
    icon: CloudUpload,
    title: 'Product listing upload',
    text: 'Prepare and upload product information so your catalog is ready to go live.',
  },
  {
    number: '04',
    icon: ClipboardCheck,
    title: 'Basic cataloguing',
    text: 'Organize product details into clear, accurate marketplace catalog entries.',
  },
  {
    number: '05',
    icon: PackageSearch,
    title: 'Listing optimization',
    text: 'Improve listing content and structure to help products stand out in marketplace search.',
  },
  {
    number: '06',
    icon: ShieldCheck,
    title: 'Account health monitoring',
    text: 'Keep an eye on account status and marketplace requirements as your business grows.',
  },
  {
    number: '07',
    icon: Headset,
    title: 'Seller support',
    text: 'Get practical support for day-to-day marketplace questions and operational needs.',
  },
  {
    number: '08',
    icon: Target,
    title: 'Marketplace growth strategy',
    text: 'Build a focused growth plan around your catalog, marketplace channels, and goals.',
  },
]

export const plans = [
  {
    name: 'Starter',
    price: '₹2,999',
    scope: 'Up to 50 SKUs',
    features: ['Account setup & onboarding', 'Marketplace registration support', 'Product listing upload', 'Basic cataloguing', 'Listing optimization', 'Account health monitoring', 'Seller support'],
  },
  {
    name: 'Growth',
    price: '₹4,999',
    scope: '51–99 SKUs',
    popular: true,
    features: ['Everything in Starter', 'Dedicated account executive', 'PPC & ads management', 'Monthly analytics', 'Competitor analysis', 'Listing optimization', 'Marketplace growth strategy'],
  },
  {
    name: 'Scale',
    price: '₹6,999',
    scope: '100–199 SKUs',
    features: ['Everything in Growth', 'Advanced ads management', 'Weekly analytics', 'Inventory & catalog management', 'Brand store setup support', 'Growth strategy consultation'],
  },
  {
    name: 'Scale Plus',
    price: '₹9,999',
    scope: '200–500 SKUs',
    features: ['Everything in Scale', 'Advanced analytics & reporting', 'Custom growth strategy', 'Priority support', 'Performance optimization', 'Quarterly business review'],
  },
]
import Link from 'next/link'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import GitHub from '../components/svgs/github'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <img src="/profile.png" height="85" width="250" alt="Profile" />
      <h1>Ryoichi Table Tennis Blog</h1>
      <h2>10年ブランクでどれだけ強くなれるのか</h2>
    </div>
  </>
)

import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: 'Hoang', lastName: 'Tran', email: 'tranhoang@mail.com' }
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1990.99}
          />
        </header>
        RECENT TRANSACTIONS

      </div>
      <RightSidebar
        user={loggedIn}
        transaction={[]}
        banks={[{ currentBalance: 99.9 }, { currentBalance: 123.4 }]}
      />
    </section>
  )
}

export default Home
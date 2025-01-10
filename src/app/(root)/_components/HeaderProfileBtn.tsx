'use client'

import LoginButton from '@/components/LoginButton'
import { UserButton } from '@clerk/nextjs'
import { SignedOut } from '@clerk/nextjs'
import { User } from 'lucide-react'
import React from 'react'

const HeaderProfileBtn = () => {
  return (
    <>
        <UserButton>
            <UserButton.MenuItems>
                <UserButton.Link
                    label="Profile"
                    labelIcon={<User className="size-4" />}
                    href="/profile"
                />
            </UserButton.MenuItems>
        </UserButton>

        <SignedOut>
            <LoginButton />
        </SignedOut>
    </>
  )
}

export default HeaderProfileBtn
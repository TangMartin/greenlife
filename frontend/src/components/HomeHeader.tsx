"use server"

import Image from "next/image"
import { useRouter } from 'next/router';
import { redirect, usePathname } from 'next/navigation';
export const HomeHeader = () => {

    const signout = async () => {
      const response = await fetch('/api/signout', {
        method: 'POST',
      });
  
      if (response.ok) {
        redirect('/');
      } else {
        console.log('Sign out failed');
        redirect('/error');
      }
    };

    return (
        <div className="flex flex-row justify-between items-center">
            <div>
                <h2 className="text-xl font-semibold">
                    Welcome to VerdiVita! 
                </h2>
                <p className="text-[#49495B]">
                    Here’s what’s going on today.
                </p>
            </div>

            <div className="flex flex-row items-center">
              
            </div>
        </div>
    )
}

'use client'
import { ActivityLogIcon, BellIcon, HomeIcon, LayersIcon, PersonIcon } from '@radix-ui/react-icons';
import { Button, Card, Checkbox, Flex, Heading, Text, TextField } from '@radix-ui/themes';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import logo from '../public/GreenLife.png'

// Updated UserForm component
const UserForm = ({ onClose, onSave }: { onClose: () => void; onSave: (userData: UserData) => void }) => {
  const [name, setName] = useState('Vlad Moroz');
  const [username, setUsername] = useState('@vladmoroz');
  const [email, setEmail] = useState('hi@vladmoroz.com');
  const [displayHistory, setDisplayHistory] = useState(true);
  const [allowFollowing, setAllowFollowing] = useState(false);
  const [showPlaylists, setShowPlaylists] = useState(true);

  const handleSave = () => {
    const userData = {
      name,
      username,
      email,
      displayHistory,
      allowFollowing,
      showPlaylists
    };
    onSave(userData);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-">
      <Card size="3" className="bg-gray-2 p-6 rounded-lg shadow-lg w-96">
        <Flex align="center" justify="between" mb="5">
          <Heading as="h3" size="4" trim="both">
            Your profile
          </Heading>

          <Flex my="-1" gap="4">
            <Button size="2" variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            <Button size="2" variant="ghost" onClick={handleSave}>
              Save
            </Button>
          </Flex>
        </Flex>

        <Flex direction="column" gap="4">
          <Flex asChild direction="column" gap="1">
            <Text as="label" size="2" weight="medium">
              <Text>Name</Text>
              <TextField.Root
                variant="classic"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Text>
          </Flex>

          <Flex asChild direction="column" gap="1">
            <Text as="label" size="2" weight="medium">
              <Text>Username</Text>
              <TextField.Root
                variant="classic"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Text>
          </Flex>

          <Flex asChild direction="column" gap="1">
            <Text as="label" size="2" weight="medium">
              <Text>Email</Text>
              <TextField.Root
                variant="classic"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Text>
          </Flex>

          <Flex direction="column" gap="2">
            <Text size="2" weight="medium">
              Privacy
            </Text>
            <Flex align="start" direction="column" gap="2">
              <Flex asChild gap="2">
                <Text as="label" size="2">
                  <Checkbox 
                    checked={displayHistory} 
                    onCheckedChange={(checked) => setDisplayHistory(checked as boolean)}
                  />
                  <Text>Display my listening history</Text>
                </Text>
              </Flex>

              <Flex asChild gap="2">
                <Text as="label" size="2">
                  <Checkbox 
                    checked={allowFollowing}
                    onCheckedChange={(checked) => setAllowFollowing(checked as boolean)}
                  />
                  <Text>Everyone can follow my activity</Text>
                </Text>
              </Flex>

              <Flex asChild gap="2">
                <Text as="label" size="2">
                  <Checkbox 
                    checked={showPlaylists}
                    onCheckedChange={(checked) => setShowPlaylists(checked as boolean)}
                  />
                  <Text>Show my playlists in search</Text>
                </Text>
              </Flex>
            </Flex>
          </Flex>

          <Flex direction="column" gap="2">
            <Text size="2" weight="medium">
              Danger zone
            </Text>
            <Flex align="start" direction="column" gap="2">
              <Link
                href="#"
                onClick={(e) => e.preventDefault()}
                size="2"
              >
                Reset recommendations
              </Link>
              <Link
                href="#"
                onClick={(e) => e.preventDefault()}
                size="2"
              >
                Delete profile
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </div>
  );
};

// Define the UserData type
type UserData = {
  name: string;
  username: string;
  email: string;
  displayHistory: boolean;
  allowFollowing: boolean;
  showPlaylists: boolean;
};


export const SideNav: React.FC = () => {
  const pathname = usePathname();
  const [showUserForm, setShowUserForm] = useState(false);
  const [UserData, setUserData] = useState<UserData | null>(null);

  const toggleUserForm = () => {
    setShowUserForm(!showUserForm);
  };

  const handleSaveUserData = (data: UserData) => {
    setUserData(data);
    console.log('User data saved:', data);
    // Here you would typically send this data to a backend API
  };

  return (
    <div className="flex flex-col h-screen w-80 justify-between bg-securon-gray text-black  border-r-accent-6 bg-accent-3">
      {/* Existing content */}
      <div>
        <div className='flex flex-row items-center m-5 pt-3 '>
          <Image
            src={logo}
            width={42}
            height={42}
            alt="Securon Logo"
          />
          <Text className='text-4xl font-bold ml-2 text-accent-9' >
            GreenLife
          </Text>
        </div>

        <div className="m-3 pt-4">
          <hr className="border-x-securon-light-gray"></hr>
        </div>

        <nav className="mx-3 pt-4" >
          <ul>
            <Link href="/" className={`flex flex-row0 p-3  items-center  rounded-lg ${pathname === '/' ? 'bg-accent-4 font-semibold' : 'bg-securon-gray'}`}>
              <HomeIcon />
              <Text className='flex items-center ml-8'>
                Dashboard
              </Text>
            </Link>
            <Link href="/recommendation" className={`flex flex-row0 p-3 items-center rounded-lg ${pathname === '/documents' ? 'bg-accent-4  font-semibold' : 'bg-securon-gray '}`}>
              <LayersIcon />
              <Text className='flex items-center ml-8'>
                Recommendation
              </Text>
            </Link> 

            <button onClick={toggleUserForm} className={`flex flex-row0 p-3 items-center rounded-lg w-full text-left ${showUserForm ? 'bg-accent-4  font-semibold' : 'bg-securon-gray '}`}>
              <PersonIcon />
              <Text className='flex items-center ml-8'>
                User
              </Text>
            </button>
          </ul>
        </nav>
      </div>

      <div className=''>
        <div className="m-3 pb-4">
            <hr className="border-x-securon-light-gray"></hr>
        </div>
        <div className='m-3'>
        <Link href="/account" className={`flex flex-row items-center p-3 rounded-lg ${pathname === '/account' ? 'bg-accent-4  font-semibold' : 'bg-securon-gray '}`}>
          <BellIcon />
          <p className='flex items-center ml-8'>
            Notifications
          </p>
        </Link>
        <Link href="/account" className={`flex flex-row items-center p-3 rounded-lg ${pathname === '/account' ? 'bg-accent-4  font-semibold' : 'bg-securon-gray '}`}>
            <ActivityLogIcon />
            <p className='flex items-center ml-8'>
              Account
            </p>
        </Link>
      </div>
      </div>

      {/* Conditional rendering of the UserForm and blurred background */}
      {showUserForm && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"></div>
          <UserForm onClose={toggleUserForm} onSave={handleSaveUserData} />
        </>
      )}
    </div>
  );
};
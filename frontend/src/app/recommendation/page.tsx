import { HomeHeader } from "@/components/HomeHeader";
import { ActivityLogIcon, BellIcon, CheckIcon, HomeIcon, LayersIcon, PersonIcon } from "@radix-ui/react-icons";
import { Button, Card, Checkbox, Flex, Grid, Heading, Text, TextField } from "@radix-ui/themes";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Marker } from "../Marker";
import logo from '../../public/GreenLife.png'
import Link from 'next/link';
import Image from 'next/image';
import { SideNav } from "@/components/SideNav";

// Define the UserData type
type UserData = {
    name: string;
    username: string;
    email: string;
    displayHistory: boolean;
    allowFollowing: boolean;
    showPlaylists: boolean;
};

export default function Recommnedation() {

    return (
        <div className="flex h-screen">
            {/* Header */}
            <SideNav />
            {/* Body */}
            <div className="flex flex-col flex-1 overflow-y-scroll no-scrollbar m-10">
                <HomeHeader />

                <div className="mt-8">

                    <Card size="4">
                        <Heading as="h3" size="6" trim="start" mb="2">
                            Pricing
                        </Heading>

                        <Text as="p" size="2" mb="5" color="gray">
                            No credit card required. Every plan includes a 30-day trial of all Pro features.
                        </Text>

                        <Grid columns="3" gap="6">
                            <Flex direction="column">
                                <Text weight="bold" size="5" mb="1">
                                    Basic
                                </Text>
                                <Text color="gray" size="2" mb="4">
                                    3 team members
                                </Text>
                                <Text weight="bold" size="5" mb="4">
                                    $0
                                    <Text size="5" weight="bold" style={{ color: 'var(--gray-a8)' }}>
                                        {' / mo'}
                                    </Text>
                                </Text>

                                <Flex direction="column" gap="2">
                                    <Flex gap="2" align="center">
                                        <Marker>
                                            <CheckIcon width="14" height="14" />
                                        </Marker>
                                        <Text size="2">Expense tracking</Text>
                                    </Flex>
                                    <Flex gap="2" align="center">
                                        <Marker>
                                            <CheckIcon width="14" height="14" />
                                        </Marker>
                                        <Text size="2">Invoicing</Text>
                                    </Flex>
                                    <Flex gap="2" align="center">
                                        <Marker>
                                            <CheckIcon width="14" height="14" />
                                        </Marker>
                                        <Text size="2">Payment tracking</Text>
                                    </Flex>
                                    <Flex gap="2" align="center">
                                        <Marker>
                                            <CheckIcon width="14" height="14" />
                                        </Marker>
                                        <Text size="2">Transaction recording</Text>
                                    </Flex>
                                    <Flex gap="2" align="center">
                                        <Marker>
                                            <CheckIcon width="14" height="14" />
                                        </Marker>
                                        <Text size="2">Basic reports</Text>
                                    </Flex>
                                    <Flex gap="2" align="center">
                                        <Marker>
                                            <CheckIcon width="14" height="14" />
                                        </Marker>
                                        <Text size="2">Email support</Text>
                                    </Flex>
                                    <Button mt="3" variant="outline">
                                        Downgrade
                                    </Button>
                                </Flex>
                            </Flex>

                            <Flex direction="column">
                                <Text weight="bold" size="5" mb="1">
                                    Growth
                                </Text>
                                <Text color="gray" size="2" mb="4">
                                    10 team members
                                </Text>
                                <Text weight="bold" size="5" mb="4">
                                    $49
                                    <Text size="5" weight="bold" style={{ color: 'var(--gray-a8)' }}>
                                        {' / mo'}
                                    </Text>
                                </Text>

                                <Flex direction="column" gap="2">
                                    <Flex gap="2" align="center">
                                        <Marker>
                                            <CheckIcon width="14" height="14" />
                                        </Marker>
                                        <Text size="2">Online payments</Text>
                                    </Flex>
                                    <Flex gap="2" align="center">
                                        <Marker>
                                            <CheckIcon width="14" height="14" />
                                        </Marker>
                                        <Text size="2">Recurring invoices</Text>
                                    </Flex>
                                    <Flex gap="2" align="center">
                                        <Marker>
                                            <CheckIcon width="14" height="14" />
                                        </Marker>
                                        <Text size="2">Bill management</Text>
                                    </Flex>
                                    <Flex gap="2" align="center">
                                        <Marker>
                                            <CheckIcon width="14" height="14" />
                                        </Marker>
                                        <Text size="2">Inventory tracking</Text>
                                    </Flex>
                                    <Flex gap="2" align="center">
                                        <Marker>
                                            <CheckIcon width="14" height="14" />
                                        </Marker>
                                        <Text size="2">Detailed reports</Text>
                                    </Flex>
                                    <Flex gap="2" align="center">
                                        <Marker>
                                            <CheckIcon width="14" height="14" />
                                        </Marker>
                                        <Text size="2">Phone support</Text>
                                    </Flex>
                                    <Button mt="3" variant="outline">
                                        Go to Billing
                                    </Button>
                                </Flex>
                            </Flex>

                            <Flex direction="column">
                                <Text weight="bold" size="5" mb="1">
                                    Pro
                                </Text>
                                <Text color="gray" size="2" mb="4">
                                    Unlimited team members
                                </Text>
                                <Text weight="bold" size="5" mb="4">
                                    $99
                                    <Text size="5" weight="bold" style={{ color: 'var(--gray-a8)' }}>
                                        {' / mo'}
                                    </Text>
                                </Text>

                                <Flex direction="column" gap="2">
                                    <Flex gap="2" align="center">
                                        <Marker>
                                            <CheckIcon width="14" height="14" />
                                        </Marker>
                                        <Text size="2">Custom invoices</Text>
                                    </Flex>
                                    <Flex gap="2" align="center">
                                        <Marker>
                                            <CheckIcon width="14" height="14" />
                                        </Marker>
                                        <Text size="2">Multi-business</Text>
                                    </Flex>
                                    <Flex gap="2" align="center">
                                        <Marker>
                                            <CheckIcon width="14" height="14" />
                                        </Marker>
                                        <Text size="2">Team collaboration</Text>
                                    </Flex>
                                    <Flex gap="2" align="center">
                                        <Marker>
                                            <CheckIcon width="14" height="14" />
                                        </Marker>
                                        <Text size="2">App integrations</Text>
                                    </Flex>
                                    <Flex gap="2" align="center">
                                        <Marker>
                                            <CheckIcon width="14" height="14" />
                                        </Marker>
                                        <Text size="2">Advanced security</Text>
                                    </Flex>
                                    <Flex gap="2" align="center">
                                        <Marker>
                                            <CheckIcon width="14" height="14" />
                                        </Marker>
                                        <Text size="2">Priority support</Text>
                                    </Flex>
                                    <Button mt="3">
                                        Upgrade
                                    </Button>
                                </Flex>
                            </Flex>
                        </Grid>
                    </Card>

                </div>
            </div>
            <div>
                <div>
                    {/* Rest of your main content */}
                </div>
            </div>
        </div>
    );
}
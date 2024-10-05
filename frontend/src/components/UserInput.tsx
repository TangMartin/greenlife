"use client"
import { PersonIcon } from "@radix-ui/react-icons";
import { Box, Button, Card, Checkbox, Flex, Grid, Heading, Switch, Text, TextArea, TextField } from "@radix-ui/themes";
import { useState } from "react";

export function UserInput() {
    const [showUserForm, setShowUserForm] = useState(false);
    const [name, setName] = useState('Vlad Moroz');
    const [city, setcity] = useState('Vancouver');
    const [email, setEmail] = useState('hi@vladmoroz.com');

    // New state for issue areas
    const [issueAreas, setIssueAreas] = useState({
        Residential: false,
        Commercial: false,
        Institutional: false,
        Industrial: false,
        Transportation: false,
        Agriculture: false
    });
    const [issueDetails, setIssueDetails] = useState('');

    function toggleUserForm() {
        setShowUserForm(!showUserForm);
    }

    function handleSave() {
        const userData = {
            name,
            city,
            email,
            issueAreas,
            issueDetails
        };
        console.log('User data saved:', userData);
        setShowUserForm(false);
    }

    function handleIssueAreaChange(area) {
        setIssueAreas(prev => ({ ...prev, [area]: !prev[area] }));
    }

    return (
        <div className="flex flex-col flex-1 overflow-y-scroll no-scrollbar m-10">

            <div className="flex flex-row justify-between items-center">
                <div>
                    <h2 className="text-xl font-semibold">
                        Welcome to GreenLife!
                    </h2>
                    <p className="text-[#49495B]">
                        Here’s what’s going on today.
                    </p>
                </div>

                <div className="flex flex-row items-center">
                    <button onClick={toggleUserForm} className={`flex flex-row0 p-3 items-center rounded-lg w-full text-left ${showUserForm ? 'bg-accent-4  font-semibold' : 'bg-securon-gray '}`}>
                        <PersonIcon />
                        <Text className='flex items-center ml-8'>
                            User
                        </Text>
                    </button>

                </div>
            </div>

            <div className="mt-8">


                {showUserForm && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-50">
                        <Card size="3" className="bg-gray-2 p-6 rounded-lg shadow-lg w-96">
                            <Flex align="center" justify="between" mb="5">
                                <Heading as="h3" size="4" trim="both">
                                    User Information
                                </Heading>

                                <Flex my="-1" gap="4">
                                    <Button size="2" variant="ghost" onClick={toggleUserForm}>
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
                                        <Text>Full Name</Text>
                                        <TextField.Root
                                            variant="classic"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </Text>
                                </Flex>

                                <Flex asChild direction="column" gap="1">
                                    <Text as="label" size="2" weight="medium">
                                        <Text>City of Residence</Text>
                                        <TextField.Root
                                            variant="classic"
                                            value={city}
                                            onChange={(e) => setcity(e.target.value)}
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

                                <Flex as="span" justify="between" gap="5">
                                    <Box as="span">
                                        <Text as="div" size="2" weight="medium" mb="1">
                                            Financial Incentive
                                        </Text>
                                        <Text as="div" color="gray" size="1">
                                            Financial benefits to encourage specific behaviors
                                        </Text>
                                    </Box>

                                    <Switch
                                        size="3"
                                        variant="classic"
                                        mt="2"
                                    />
                                </Flex>


                                <Flex as="span" justify="between" gap="5">
                                    <Box as="span">
                                        <Text as="div" size="2" weight="medium" mb="1">
                                            Rebate
                                        </Text>
                                        <Text as="div" color="gray" size="1">
                                            Refers to a partial refund given after a purchase or investment is made
                                        </Text>
                                    </Box>

                                    <Switch
                                        size="3"
                                        variant="classic"
                                        mt="2"
                                    />
                                </Flex>


                                <Flex direction="column" gap="2">
                                    <Flex direction="column" gap="2">
                                        <Text size="2" weight="medium">
                                            What best describes the areas of your issues?
                                        </Text>
                                        <Flex align="start" direction="column" gap="2">
                                            {Object.keys(issueAreas).map((area) => (
                                                <Flex key={area} asChild gap="2">
                                                    <Text as="label" size="2">
                                                        <Checkbox
                                                            checked={issueAreas[area]}
                                                            onCheckedChange={() => handleIssueAreaChange(area)}
                                                        />
                                                        <Text>{area}</Text>
                                                    </Text>
                                                </Flex>
                                            ))}
                                        </Flex>
                                    </Flex>

                                    <Flex direction="column" gap="2">
                                        <Text size="2" weight="medium">
                                            Please provide more details about your issues:
                                        </Text>
                                        <TextArea
                                            placeholder="Describe your issues or concerns in detail..."
                                            value={issueDetails}
                                            onChange={(e) => setIssueDetails(e.target.value)}
                                            maxLength={500} // You can adjust this limit as needed
                                        />
                                    </Flex>
                                </Flex>


                            </Flex>
                        </Card>
                    </div>
                )}

                <Card size="4">
                    <Heading as="h3" size="6" trim="start" mb="2">
                        Pricing
                    </Heading>

                    <Text as="p" size="2" mb="5" color="gray">
                        No credit card required. Every plan includes a 30-day trial of all Pro features.
                    </Text>

                    <Grid columns="3" gap="6">
                        {/* Pricing grid content remains unchanged */}
                    </Grid>
                </Card>
            </div>
        </div>
    );
}
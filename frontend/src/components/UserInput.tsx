"use client"
import { Marker } from "@/app/Marker";
import { CheckIcon, PersonIcon } from "@radix-ui/react-icons";
import { Box, Button, Card, Checkbox, Flex, Grid, Heading, Switch, Text, TextArea, TextField } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import axios from 'axios';

// Updated fetchPricingData function

const fetchPricingData = async (userData) => {
    try {
        // Dynamically construct the question using userData

        const question = `As a homeowner in BC, I want to know three programs that I am eligible for with the following information {name: ${userData.name}, city: ${userData.city}, email: ${userData.email}, issueAreas: ${JSON.stringify(userData.issueAreas)}, issueDetails: ${userData.issueDetails}} while saving some money for the effort. Format the response as a JSON file with the following items: program_name, organization, description, type_of_program, sectors, date_of_update, maximum_rebate, Link(url), eligibility criteria (array of 5). All responses returned must be in JSON format. The answer returned should be a JSON example like the example provided: { programs: [{ program_name: '', organization: '', description: '', type_of_program: '', sectors: ['', ''], date_of_update: '', maximum_rebate: 0, Link: ''] }] }. Do not say 'based on the information provided, here are three relevant programs you may be eligible for. The Link should be a url from the source you are gathering information from'`;
        console.log(question)

        const response = await axios.post('https://rw1dudosqj.execute-api.us-west-2.amazonaws.com/prod/lambdaBedrockProd', {
            question: question
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        console.log('Response Data:', response.data);

        // Parse the response data if it's a string
        let parsedData;
        if (typeof response.data === 'string') {
            parsedData = JSON.parse(response.data);
        } else {
            parsedData = response.data;
        }

        return parsedData;
    } catch (error) {
        console.error('Error fetching pricing data:', error);
        return null;
    }
};



export function UserInput() {
    const [showUserForm, setShowUserForm] = useState(false);
    const [name, setName] = useState('Vlad Moroz');
    const [city, setCity] = useState('Vancouver');
    const [email, setEmail] = useState('hi@vladmoroz.com');
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [fetchTrigger, setFetchTrigger] = useState(0);

    const [issueAreas, setIssueAreas] = useState({
        Residential: false,
        Commercial: false,
        Institutional: false,
        Industrial: false,
        Transportation: false,
        Agriculture: false
    });
    const [issueDetails, setIssueDetails] = useState('');

    useEffect(() => {
        if (fetchTrigger > 0) {
            const userData = {
                name,
                city,
                email,
                issueAreas,
                issueDetails
            };

            setLoading(true);
            setError(null);
            //console.log(userData)
            //console.log(JSON.stringify(userData).replace(/"/g, ''))


            fetchPricingData(userData)
                .then(result => {
                    setData(result);
                    console.log("Result:", data);
                    setShowUserForm(false);
                })
                .catch(err => {
                    setError('Failed to fetch data. Please try again.');
                })
                .finally(() => {
                    setLoading(false);
                });

        }
    }, [fetchTrigger]);


    useEffect(() => {
        console.log(data)
    }, [data]);

    function toggleUserForm() {
        setShowUserForm(!showUserForm);
    }

    const handleSave = () => {
        setFetchTrigger(prev => prev + 1);
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
                                    <Button onClick={handleSave} disabled={loading}>
                                        {loading ? 'Saving...' : 'Save'}
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
                                            onChange={(e) => setCity(e.target.value)}
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
                        Program Types
                    </Heading>

                    <Text as="p" size="2" mb="5" color="gray">
                        Explore the different types of programs you may be eligible for.
                    </Text>

                    <Grid columns="3" gap="6">
                        {/* Rebate Column */}
                        <Flex direction="column">
                            <Text weight="bold" size="5" mb="1">
                                Rebate
                            </Text>
                            <Text color="gray" size="2" mb="4">
                                Get money back after your purchase.
                            </Text>

                            <Flex direction="column" gap="2">
                                <Flex gap="2" align="center">
                                    <Marker>
                                        <CheckIcon width="14" height="14" />
                                    </Marker>
                                    <Text size="2">Cashback on eligible products</Text>
                                </Flex>
                                <Flex gap="2" align="center">
                                    <Marker>
                                        <CheckIcon width="14" height="14" />
                                    </Marker>
                                    <Text size="2">Lower upfront costs</Text>
                                </Flex>
                                <Flex gap="2" align="center">
                                    <Marker>
                                        <CheckIcon width="14" height="14" />
                                    </Marker>
                                    <Text size="2">Energy-efficient incentives</Text>
                                </Flex>
                                {/* Add more features as needed */}
                                <Button mt="3" variant="outline">
                                <a href={"https://energyrates.ca/sustainability-incentives-in-canada-tax-credits-rebates-and-more/"} target="_blank" rel="noopener noreferrer">
                                            Learn More
                                    </a>
                                </Button>
                            </Flex>
                        </Flex>

                        {/* Financial Incentive Column */}
                        <Flex direction="column">
                            <Text weight="bold" size="5" mb="1">
                                Financial Incentive
                            </Text>
                            <Text color="gray" size="2" mb="4">
                                Benefits to encourage specific actions.
                            </Text>

                            <Flex direction="column" gap="2">
                                <Flex gap="2" align="center">
                                    <Marker>
                                        <CheckIcon width="14" height="14" />
                                    </Marker>
                                    <Text size="2">Tax credits</Text>
                                </Flex>
                                <Flex gap="2" align="center">
                                    <Marker>
                                        <CheckIcon width="14" height="14" />
                                    </Marker>
                                    <Text size="2">Low-interest loans</Text>
                                </Flex>
                                <Flex gap="2" align="center">
                                    <Marker>
                                        <CheckIcon width="14" height="14" />
                                    </Marker>
                                    <Text size="2">Subsidies</Text>
                                </Flex>
                                {/* Add more features as needed */}
                                <Button mt="3" variant="outline">
                                <a href={'https://sloanreview.mit.edu/article/economic-incentives-are-key-to-driving-sustainability-at-scale/'} target="_blank" rel="noopener noreferrer">
                                            Learn More
                                    </a>
                                </Button>
                            </Flex>
                        </Flex>

                        {/* Grant Column */}
                        <Flex direction="column">
                            <Text weight="bold" size="5" mb="1">
                                Grant
                            </Text>
                            <Text color="gray" size="2" mb="4">
                                Funds provided for specific purposes.
                            </Text>

                            <Flex direction="column" gap="2">
                                <Flex gap="2" align="center">
                                    <Marker>
                                        <CheckIcon width="14" height="14" />
                                    </Marker>
                                    <Text size="2">No repayment required</Text>
                                </Flex>
                                <Flex gap="2" align="center">
                                    <Marker>
                                        <CheckIcon width="14" height="14" />
                                    </Marker>
                                    <Text size="2">Support for projects</Text>
                                </Flex>
                                <Flex gap="2" align="center">
                                    <Marker>
                                        <CheckIcon width="14" height="14" />
                                    </Marker>
                                    <Text size="2">Community development</Text>
                                </Flex>
                                {/* Add more features as needed */}
                                <Button mt="3">
                                    <a href={"https://hellodarwin.com/business-aid/grants-and-funding/environment-climate#:~:text=Eligible%20Projects%20for%20Funding,the%20ecological%20health%20of%20watersheds."} target="_blank" rel="noopener noreferrer">
                                            Learn More
                                    </a>
                                </Button>
                            </Flex>
                        </Flex>
                    </Grid>
                </Card>


                <Card size="4" className="mt-8">
                    <Heading as="h3" size="6" trim="start" mb="2">
                        Available Programs
                    </Heading>

                    <Text as="p" size="2" mb="5" color="gray">
                        Here are the programs you may be eligible for based on your information.
                    </Text>

                    <Grid columns="1" gap="6">
                        {data && data.programs ? (
                            data.programs.map((program, index) => (
                                <Flex key={index} direction="column" className="border p-4 rounded-lg">
                                    <Text weight="bold" size="5" mb="1">
                                        {program.program_name}
                                    </Text>
                                    <Text color="gray" size="2" mb="2">
                                        {program.organization}
                                    </Text>
                                    <Text size="2" mb="2">
                                        {program.description}
                                    </Text>
                                    <Text size="2" mb="2">
                                        <strong>Type:</strong> {program.type_of_program}
                                    </Text>
                                    <Text size="2" mb="2">
                                        <strong>Sectors:</strong> {program.sectors.join(', ')}
                                    </Text>
                                    <Text size="2" mb="2">
                                        <strong>Maximum Rebate:</strong> ${program.maximum_rebate}
                                    </Text>
                                    <Text size="2" mb="2">
                                        <strong>Last Updated:</strong> {program.date_of_update}
                                    </Text>
                                    <Text size="2" mb="2">
                                        <strong>Eligibility Criteria:</strong>
                                    </Text>
                                    <ul className="list-disc pl-5">
                                        {program.eligibility_criteria.map((criteria, i) => (
                                            <li key={i} className="text-sm">{criteria}</li>
                                        ))}
                                    </ul>
                                    <Button asChild mt="3">
                                        <a href={program.Link} target="_blank" rel="noopener noreferrer">
                                            Learn More
                                        </a>
                                    </Button>
                                </Flex>
                            ))
                        ) : (
                            <Text>No program data available. Please fill out the user form to see eligible programs.</Text>
                        )}
                    </Grid>
                </Card>
            </div>
        </div>
    );
}
import { HomeHeader } from "@/components/HomeHeader";
import { SideNav } from "@/components/SideNav";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  CheckIcon
} from '@radix-ui/react-icons';
import {
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Heading,
  Table,
  Text
} from '@radix-ui/themes';
import { Marker } from './Marker';

export default async function Home() {

  return (
    <div className="flex h-screen">
      <SideNav />
      <div className="flex flex-col flex-1 overflow-y-scroll no-scrollbar m-10">
        <HomeHeader />

        <div className="mt-8">
          <Heading className="mb-4">
            Metrics
          </Heading>
          <Grid columns="3" gap="5" className="ml-4">
            <Box>
              <Flex gap="2" mb="2" align="center">
                <Text size="2" color="gray">
                  Number of programs we have
                </Text>
                {/* <Badge color="teal" radius="full">
                  <ArrowUpIcon width="12" height="12" style={{ marginLeft: -2 }} />
                  3.2%
                </Badge> */}
              </Flex>
              <Text as="div" mb="2" size="8" weight="bold">
                150
              </Text>
            </Box>

            <Box>
              <Flex gap="2" mb="2" align="center">
                <Text size="2" color="gray">
                  Total Funding Available
                </Text>
                {/* <Badge color="red" radius="full">
                  <ArrowUpIcon width="12" height="12" style={{ marginLeft: -2 }} />
                  12.8%
                </Badge> */}
              </Flex>
              <Text as="div" mb="2" size="8" weight="bold">
                $211K
              </Text>
            </Box>

            <Box>
              <Flex gap="2" mb="2" align="center">
                <Text size="2" color="gray">
                  CapEx
                </Text>
                <Badge color="teal" radius="full">
                  <ArrowDownIcon width="12" height="12" style={{ marginLeft: -2 }} />
                  8.8%
                </Badge>
              </Flex>
              <Text as="div" mb="2" size="8" weight="bold">
                $94K
              </Text>
            </Box>

            <Box>
              <Flex gap="2" mb="2" align="center">
                <Text size="2" color="gray">
                  Application success rate
                </Text>
                {/* <Badge color="red" radius="full">
                  <ArrowDownIcon width="12" height="12" style={{ marginLeft: -2 }} />
                  1.2%
                </Badge> */}
              </Flex>
              <Text as="div" mb="2" size="8" weight="bold">
                70%
              </Text>
            </Box>

            <Box>
              <Flex gap="2" mb="2" align="center">
                <Text size="2" color="gray">
                  Number of Participants so far
                </Text>
                {/* <Badge color="gray" variant="surface" radius="full">
                  0.0%
                </Badge> */}
              </Flex>
              <Text as="div" mb="2" size="8" weight="bold">
                2000
              </Text>
            </Box>

            <Box>
              <Flex gap="2" mb="2" align="center">
                <Text size="2" color="gray">
                  EBITDA
                </Text>
                <Badge color="teal" radius="full">
                  <ArrowUpIcon width="12" height="12" style={{ marginLeft: -2 }} />
                  4.1%
                </Badge>
              </Flex>
              <Text as="div" mb="2" size="8" weight="bold">
                $443K
              </Text>
            </Box>
          </Grid>

          <Heading className="mt-8 mb-4">
            Database
          </Heading>
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
                <Table.Cell>danilo@example.com</Table.Cell>
                <Table.Cell>Developer</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
                <Table.Cell>zahra@example.com</Table.Cell>
                <Table.Cell>Admin</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.RowHeaderCell>Jasper Eriksson</Table.RowHeaderCell>
                <Table.Cell>jasper@example.com</Table.Cell>
                <Table.Cell>Developer</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>

        

        </div>
      </div>
    </div>
  );
}

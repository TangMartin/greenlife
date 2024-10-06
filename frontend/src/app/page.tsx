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
                  Funding Allocated so far
                </Text>
                {/* <Badge color="teal" radius="full">
                  <ArrowDownIcon width="12" height="12" style={{ marginLeft: -2 }} />
                  8.8%
                </Badge> */}
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
                100
              </Text>
            </Box>

            <Box>
              <Flex gap="2" mb="2" align="center">
                <Text size="2" color="gray">
                  Average Funding per participant
                </Text>
                {/* <Badge color="teal" radius="full">
                  <ArrowUpIcon width="12" height="12" style={{ marginLeft: -2 }} />
                  4.1%
                </Badge> */}
              </Flex>
              <Text as="div" mb="2" size="8" weight="bold">
                $1k
              </Text>
            </Box>
          </Grid>

          <Heading className="mt-8 mb-4">
            Database
          </Heading>
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>Program Name</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Rebate/Benefits</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Link</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
            <Table.Row>
  <Table.RowHeaderCell>Natural Gas Water Heater Rebates</Table.RowHeaderCell>
  <Table.Cell>$1000/unit</Table.Cell>
  <Table.Cell>
    <a href="https://www.fortisbc.com/rebates/business/natural-gas-water-heater-rebates" target="_blank" rel="noopener noreferrer">
      https://www.fortisbc.com/rebates/business/natural-gas-water-heater-rebates
    </a>
  </Table.Cell>
</Table.Row>

<Table.Row>
  <Table.RowHeaderCell>Natural Gas Kitchen Equipment Rebates</Table.RowHeaderCell>
  <Table.Cell>$1200/vat</Table.Cell>
  <Table.Cell>
    <a href="https://www.fortisbc.com/rebates/business/natural-gas-kitchen-equipment-rebates" target="_blank" rel="noopener noreferrer">
      https://www.fortisbc.com/rebates/business/natural-gas-kitchen-equipment-rebates
    </a>
  </Table.Cell>
</Table.Row>

<Table.Row>
  <Table.RowHeaderCell>Variable Speed Drive Rebates for Non-Profit Organizations</Table.RowHeaderCell>
  <Table.Cell>$112 per motor hp</Table.Cell>
  <Table.Cell>
    <a href="https://www.fortisbc.com/rebates/business/variable-speed-drive-rebates-for-non-profi t-organizations" target="_blank" rel="noopener noreferrer">
      https://www.fortisbc.com/rebates/business/variable-speed-drive-rebates-for-non-profi t-organizations
    </a>
  </Table.Cell>
</Table.Row>

<Table.Row>
  <Table.RowHeaderCell>Door & Window Rebates</Table.RowHeaderCell>
  <Table.Cell>$100 per door or window, up to $2,000</Table.Cell>
  <Table.Cell>
    <a href="https://www.fortisbc.com/rebates/home/door-window-rebates" target="_blank" rel="noopener noreferrer">
      https://www.fortisbc.com/rebates/home/door-window-rebates
    </a>
  </Table.Cell>
</Table.Row>

<Table.Row>
  <Table.RowHeaderCell>Refrigeration Equipment Rebates</Table.RowHeaderCell>
  <Table.Cell>$100 per appliance or more depending on volume</Table.Cell>
  <Table.Cell>
    <a href="https://www.fortisbc.com/rebates/business/refrigeration-equipment-rebates" target="_blank" rel="noopener noreferrer">
      https://www.fortisbc.com/rebates/business/refrigeration-equipment-rebates
    </a>
  </Table.Cell>
</Table.Row>

<Table.Row>
  <Table.RowHeaderCell>Social Housing Retrofit Support Program</Table.RowHeaderCell>
  <Table.Cell>up to $8000</Table.Cell>
  <Table.Cell>
    <a href="https://www.fortisbc.com/rebates/business/social-housing-retrofit-support-program" target="_blank" rel="noopener noreferrer">
      https://www.fortisbc.com/rebates/business/social-housing-retrofit-support-program
    </a>
  </Table.Cell>
</Table.Row>

<Table.Row>
  <Table.RowHeaderCell>Energy Conservation Assistance Program</Table.RowHeaderCell>
  <Table.Cell>Free product installation and energy coaching</Table.Cell>
  <Table.Cell>
    <a href="https://www.bchydro.com/powersmart/residential/rebates-programs/savings-based-on-income.html" target="_blank" rel="noopener noreferrer">
      https://www.bchydro.com/powersmart/residential/rebates-programs/savings-based-on-income.html
    </a>
  </Table.Cell>
</Table.Row>

<Table.Row>
  <Table.RowHeaderCell>Energy Efficient Products Program</Table.RowHeaderCell>
  <Table.Cell>$100 gift card</Table.Cell>
  <Table.Cell>
    <a href="https://www.bchydro.com/powersmart/residential/rebates-programs/product-rebates.html" target="_blank" rel="noopener noreferrer">
      https://www.bchydro.com/powersmart/residential/rebates-programs/product-rebates.html
    </a>
  </Table.Cell>
</Table.Row>

<Table.Row>
  <Table.RowHeaderCell>Energy Savings Kit Program</Table.RowHeaderCell>
  <Table.Cell>Four Led light bulbs</Table.Cell>
  <Table.Cell>
    <a href="https://www.bchydro.com/powersmart/residential/rebates-programs/savings-based-on-income/free-energy-savings-kit.html" target="_blank" rel="noopener noreferrer">
      https://www.bchydro.com/powersmart/residential/rebates-programs/savings-based-on-income/free-energy-savings-kit.html
    </a>
  </Table.Cell>
</Table.Row>

<Table.Row>
  <Table.RowHeaderCell>Home Renovation Rebate</Table.RowHeaderCell>
  <Table.Cell>Up to $10k in rebates for making energy efficiency upgrades</Table.Cell>
  <Table.Cell>
    <a href="https://www.bchydro.com/powersmart/residential/rebates-programs/home-renovation.html" target="_blank" rel="noopener noreferrer">
      https://www.bchydro.com/powersmart/residential/rebates-programs/home-renovation.html
    </a>
  </Table.Cell>
</Table.Row>

<Table.Row>
  <Table.RowHeaderCell>Indigenous Communities Conservation Program</Table.RowHeaderCell>
  <Table.Cell>two programs specifically for indigenous communities</Table.Cell>
  <Table.Cell>
    <a href="https://www.bchydro.com/powersmart/local_government_district/indigenous-community-offers.html?utm_source=direct&utm_medium=redirect&utm_content=iccp" target="_blank" rel="noopener noreferrer">
      https://www.bchydro.com/powersmart/local_government_district/indigenous-community-offers.html?utm_source=direct&utm_medium=redirect&utm_content=iccp
    </a>
  </Table.Cell>
</Table.Row>

<Table.Row>
  <Table.RowHeaderCell>Non-profit and Aboriginal Housing Upgrades</Table.RowHeaderCell>
  <Table.Cell>Free portable AC offers</Table.Cell>
  <Table.Cell>
    <a href="https://www.bchydro.com/powersmart/residential/rebates-programs/savings-based-on-income/non-profit-indigenous-housing-upgrades.html" target="_blank" rel="noopener noreferrer">
      https://www.bchydro.com/powersmart/residential/rebates-programs/savings-based-on-income/non-profit-indigenous-housing-upgrades.html
    </a>
  </Table.Cell>
</Table.Row>

<Table.Row>
  <Table.RowHeaderCell>Commercial New Construction Program</Table.RowHeaderCell>
  <Table.Cell>Help to create energy-efficient buildings</Table.Cell>
  <Table.Cell>
    <a href="https://www.bchydro.com/powersmart/business/programs/new-construction.html" target="_blank" rel="noopener noreferrer">
      https://www.bchydro.com/powersmart/business/programs/new-construction.html
    </a>
  </Table.Cell>
</Table.Row>

<Table.Row>
  <Table.RowHeaderCell>Business Energy Saving Incentives</Table.RowHeaderCell>
  <Table.Cell>incentives available for lighting and upgrades</Table.Cell>
  <Table.Cell>
    <a href="https://www.bchydro.com/powersmart/business/programs/business-incentives.html" target="_blank" rel="noopener noreferrer">
      https://www.bchydro.com/powersmart/business/programs/business-incentives.html
    </a>
  </Table.Cell>
</Table.Row>

<Table.Row>
  <Table.RowHeaderCell>Energy Manager Program</Table.RowHeaderCell>
  <Table.Cell>50% of energy manager's salary funding</Table.Cell>
  <Table.Cell>
    <a href="https://www.bchydro.com/powersmart/business/programs/energy-manager.html" target="_blank" rel="noopener noreferrer">
      https://www.bchydro.com/powersmart/business/programs/energy-manager.html
    </a>
  </Table.Cell>
</Table.Row>

<Table.Row>
  <Table.RowHeaderCell>Strategic Energy Management</Table.RowHeaderCell>
  <Table.Cell>expert advice from professionals</Table.Cell>
  <Table.Cell>
    <a href="https://www.bchydro.com/powersmart/business/programs/partners.html" target="_blank" rel="noopener noreferrer">
      https://www.bchydro.com/powersmart/business/programs/partners.html
    </a>
  </Table.Cell>
</Table.Row>

<Table.Row>
  <Table.RowHeaderCell>Electrification incentives for industry</Table.RowHeaderCell>
  <Table.Cell>Provide Demonstration or pilot projects</Table.Cell>
  <Table.Cell>
    <a href="https://www.bchydro.com/powersmart/business/programs/industry-electrification-incentives.html" target="_blank" rel="noopener noreferrer">
      https://www.bchydro.com/powersmart/business/programs/industry-electrification-incentives.html
    </a>
  </Table.Cell>
</Table.Row>

<Table.Row>
  <Table.RowHeaderCell>Energy Studies & Audits - End-Use Assessment</Table.RowHeaderCell>
  <Table.Cell>up to 100% funding for an energy expert to audit</Table.Cell>
  <Table.Cell>
    <a href="https://www.bchydro.com/powersmart/business/programs/studies-audits/integrated-energy-audit.html" target="_blank" rel="noopener noreferrer">
      https://www.bchydro.com/powersmart/business/programs/studies-audits/integrated-energy-audit.html
    </a>
  </Table.Cell>
</Table.Row>

<Table.Row>
  <Table.RowHeaderCell>Energy Studies & Audits - Energy Efficiency Feasibility Study</Table.RowHeaderCell>
  <Table.Cell>100% funded study</Table.Cell>
  <Table.Cell>
    <a href="https://www.bchydro.com/powersmart/business/programs/studies-audits/eefs.html" target="_blank" rel="noopener noreferrer">
      https://www.bchydro.com/powersmart/business/programs/studies-audits/eefs.html
    </a>
  </Table.Cell>
</Table.Row>

<Table.Row>
  <Table.RowHeaderCell>Facilities Electrification Fund</Table.RowHeaderCell>
  <Table.Cell>up to 50% of costs to switch operations</Table.Cell>
  <Table.Cell>
    <a href="https://www.bchydro.com/powersmart/business/programs/electrification-fund.html" target="_blank" rel="noopener noreferrer">
      https://www.bchydro.com/powersmart/business/programs/electrification-fund.html
    </a>
  </Table.Cell>
</Table.Row>

<Table.Row>
  <Table.RowHeaderCell>Industrial Project Incentives</Table.RowHeaderCell>
  <Table.Cell>self-serve incentives</Table.Cell>
  <Table.Cell>
    <a href="https://www.bchydro.com/powersmart/business/programs/project-incentives.html" target="_blank" rel="noopener noreferrer">
      https://www.bchydro.com/powersmart/business/programs/project-incentives.html
    </a>
  </Table.Cell>
</Table.Row>

<Table.Row>
  <Table.RowHeaderCell>Project Incentives - Self-Serve Incentive Program</Table.RowHeaderCell>
  <Table.Cell>get funding for lighting and compressed air system</Table.Cell>
  <Table.Cell>
    <a href="https://www.bchydro.com/powersmart/business/programs/project-incentives/sip.html" target="_blank" rel="noopener noreferrer">
      https://www.bchydro.com/powersmart/business/programs/project-incentives/sip.html
    </a>
  </Table.Cell>
</Table.Row>

<Table.Row>
  <Table.RowHeaderCell>Strategic Energy Management - Industrial Energy Manager</Table.RowHeaderCell>
  <Table.Cell>Funding to hire an energy manager</Table.Cell>
  <Table.Cell>
    <a href="https://www.bchydro.com/powersmart/business/programs/energy-management/iem.html" target="_blank" rel="noopener noreferrer">
      https://www.bchydro.com/powersmart/business/programs/energy-management/iem.html
    </a>
  </Table.Cell>
</Table.Row>

<Table.Row>
  <Table.RowHeaderCell>Sustainable Communities Program</Table.RowHeaderCell>
  <Table.Cell>Provide Funding to conduct research</Table.Cell>
  <Table.Cell>
    <a href="https://www.bchydro.com/powersmart/business/programs/sustainable-communities.html" target="_blank" rel="noopener noreferrer">
      https://www.bchydro.com/powersmart/business/programs/sustainable-communities.html
    </a>
  </Table.Cell>
</Table.Row>

<Table.Row>
  <Table.RowHeaderCell>Heat Pump & Electric Water Heater Rebates for Non-Profit Organizations</Table.RowHeaderCell>
  <Table.Cell>$2000 per unit</Table.Cell>
  <Table.Cell>
    <a href="https://www.fortisbc.com/rebates/business/heat-pump-and-electric-water-heater-rebates-for-non-profit-organizations" target="_blank" rel="noopener noreferrer">
      https://www.fortisbc.com/rebates/business/heat-pump-and-electric-water-heater-rebates-for-non-profit-organizations
    </a>
  </Table.Cell>
</Table.Row>

<Table.Row>
  <Table.RowHeaderCell>Irrigation Equipment</Table.RowHeaderCell>
  <Table.Cell>Only retrofit projects of existing irrigation systems are eligible for rebates</Table.Cell>
  <Table.Cell>
    <a href="https://www.fortisbc.com/rebates/business/irrigation-equipment" target="_blank" rel="noopener noreferrer">
      https://www.fortisbc.com/rebates/business/irrigation-equipment
    </a>
  </Table.Cell>
</Table.Row>

<Table.Row>
  <Table.RowHeaderCell>Natural Gas Boiler Rebates</Table.RowHeaderCell>
  <Table.Cell>Cover administration fees</Table.Cell>
  <Table.Cell>
    <a href="https://www.fortisbc.com/rebates/business/natural-gas-boiler-rebates" target="_blank" rel="noopener noreferrer">
      https://www.fortisbc.com/rebates/business/natural-gas-boiler-rebates
    </a>
  </Table.Cell>
</Table.Row>

<Table.Row>
  <Table.RowHeaderCell>Natural Gas Boiler Rebates for Non-Profit Organizations</Table.RowHeaderCell>
  <Table.Cell>Cover administration fees for non-profit organization</Table.Cell>
  <Table.Cell>
    <a href="https://www.fortisbc.com/rebates/business/natural-gas-boiler-rebates-for-non-profit-organizations" target="_blank" rel="noopener noreferrer">
      https://www.fortisbc.com/rebates/business/natural-gas-boiler-rebates-for-non-profit-organizations
    </a>
  </Table.Cell>
</Table.Row>

<Table.Row>
  <Table.RowHeaderCell>Pipe & Tank Insulation Rebates</Table.RowHeaderCell>
  <Table.Cell>$4 per linear foot</Table.Cell>
  <Table.Cell>
    <a href="https://www.fortisbc.com/rebates/business/pipe-and-tank-insulation-rebates" target="_blank" rel="noopener noreferrer">
      https://www.fortisbc.com/rebates/business/pipe-and-tank-insulation-rebates
    </a>
  </Table.Cell>
</Table.Row>

<Table.Row>
  <Table.RowHeaderCell>Radiant Tube & Unit Heater Rebates</Table.RowHeaderCell>
  <Table.Cell>$800 per unit</Table.Cell>
  <Table.Cell>
    <a href="https://www.fortisbc.com/rebates/business/radiant-tube-and-unit-heater-rebates" target="_blank" rel="noopener noreferrer">
      https://www.fortisbc.com/rebates/business/radiant-tube-and-unit-heater-rebates
    </a>
  </Table.Cell>
</Table.Row>

<Table.Row>
  <Table.RowHeaderCell>Refrigeration Equipment Rebates</Table.RowHeaderCell>
  <Table.Cell>up to $400 per appliance</Table.Cell>
  <Table.Cell>
    <a href="https://www.fortisbc.com/rebates/business/refrigeration-equipment-rebates" target="_blank" rel="noopener noreferrer">
      https://www.fortisbc.com/rebates/business/refrigeration-equipment-rebates
    </a>
  </Table.Cell>
</Table.Row>

<Table.Row>
  <Table.RowHeaderCell>Rental Apartment Efficiency Program</Table.RowHeaderCell>
  <Table.Cell>free water-efficient showerhead</Table.Cell>
  <Table.Cell>
    <a href="https://www.betterbuildingsbc.ca/incentives/rental-apartment-efficiency-program/" target="_blank" rel="noopener noreferrer">
      https://www.betterbuildingsbc.ca/incentives/rental-apartment-efficiency-program/
    </a>
  </Table.Cell>
</Table.Row>

<Table.Row>
  <Table.RowHeaderCell>Social Housing Retrofit Support Program</Table.RowHeaderCell>
  <Table.Cell>Up to $5000</Table.Cell>
  <Table.Cell>
    <a href="https://www.fortisbc.com/rebates-and-energy-savings/rebates-and-offers/rebates-business?l=&pos=false" target="_blank" rel="noopener noreferrer">
      https://www.fortisbc.com/rebates-and-energy-savings/rebates-and-offers/rebates-business?l=&pos=false
    </a>
  </Table.Cell>
</Table.Row>

<Table.Row>
  <Table.RowHeaderCell>Steam Trap Audit & Replacement Rebates</Table.RowHeaderCell>
  <Table.Cell>$250 per failed-open steam trap replaced</Table.Cell>
  <Table.Cell>
    <a href="https://www.fortisbc.com/rebates/business/steam-trap-audit-and-replacement-rebates" target="_blank" rel="noopener noreferrer">
      https://www.fortisbc.com/rebates/business/steam-trap-audit-and-replacement-rebates
    </a>
  </Table.Cell>
</Table.Row>

<Table.Row>
  <Table.RowHeaderCell>Thermal Curtain Rebates</Table.RowHeaderCell>
  <Table.Cell>$0.55 per square foot</Table.Cell>
  <Table.Cell>
    <a href="https://www.fortisbc.com/rebates/business/thermal-curtain-rebates" target="_blank" rel="noopener noreferrer">
      https://www.fortisbc.com/rebates/business/thermal-curtain-rebates
    </a>
  </Table.Cell>
</Table.Row>

<Table.Row>
  <Table.RowHeaderCell>Variable Speed Drive Rebates</Table.RowHeaderCell>
  <Table.Cell>$80 per motor hp</Table.Cell>
  <Table.Cell>
    <a href="https://www.fortisbc.com/rebates/business/variable-speed-drive-rebates" target="_blank" rel="noopener noreferrer">
      https://www.fortisbc.com/rebates/business/variable-speed-drive-rebates
    </a>
  </Table.Cell>
</Table.Row>

<Table.Row>
  <Table.RowHeaderCell>Clothes Washer & Dryer Rebates</Table.RowHeaderCell>
  <Table.Cell>rebate of up to $250</Table.Cell>
  <Table.Cell>
    <a href="https://www.fortisbc.com/rebates/home/clothes-washers-dryers-rebates" target="_blank" rel="noopener noreferrer">
      https://www.fortisbc.com/rebates/home/clothes-washers-dryers-rebates
    </a>
  </Table.Cell>
</Table.Row>

<Table.Row>
  <Table.RowHeaderCell>Door & Window Rebates</Table.RowHeaderCell>
  <Table.Cell>$100 per doow or window</Table.Cell>
  <Table.Cell>
    <a href="https://www.fortisbc.com/rebates/home/door-window-rebates" target="_blank" rel="noopener noreferrer">
    https://www.fortisbc.com/rebates/home/door-window-rebates
    </a>
  </Table.Cell>
</Table.Row>

<Table.Row>
  <Table.RowHeaderCell>EnerChoice Fireplace Program</Table.RowHeaderCell>
  <Table.Cell>Up to $350 dollars</Table.Cell>
  <Table.Cell>
    <a href="https://www.fortisbc.com/rebates-and-energy-savings/rebates-and-offers?l=" target="_blank" rel="noopener noreferrer">
    https://www.fortisbc.com/rebates-and-energy-savings/rebates-and-offers?l=
    </a>
  </Table.Cell>
</Table.Row>

<Table.Row>
  <Table.RowHeaderCell>Energy Saving Kits</Table.RowHeaderCell>
  <Table.Cell>Up to $150</Table.Cell>
  <Table.Cell>
    <a href="https://www.fortisbc.com/rebates-and-energy-savings/rebates-and-offers?l=" target="_blank" rel="noopener noreferrer">
    https://www.fortisbc.com/rebates-and-energy-savings/rebates-and-offers?l=
    </a>
  </Table.Cell>
</Table.Row>

<Table.Row>
  <Table.RowHeaderCell>Natural Gas Combination Heating & Hot Water SystemRebates</Table.RowHeaderCell>
  <Table.Cell>Up to $250</Table.Cell>
  <Table.Cell>
    <a href="https://www.fortisbc.com/rebates-and-energy-savings/rebates-and-offers?l=" target="_blank" rel="noopener noreferrer">
    https://www.fortisbc.com/rebates-and-energy-savings/rebates-and-offers?l=
    </a>
  </Table.Cell>
</Table.Row>

<Table.Row>
  <Table.RowHeaderCell>Natural Gas Furnace & Boiler Rebates</Table.RowHeaderCell>
  <Table.Cell>Up to $150</Table.Cell>
  <Table.Cell>
    <a href="https://www.fortisbc.com/rebates-and-energy-savings/rebates-and-offers?l=" target="_blank" rel="noopener noreferrer">
    https://www.fortisbc.com/rebates-and-energy-savings/rebates-and-offers?l=
    </a>
  </Table.Cell>
</Table.Row>

<Table.Row>
  <Table.RowHeaderCell>BC Scrap-It Program</Table.RowHeaderCell>
  <Table.Cell>$300 cash prize</Table.Cell>
  <Table.Cell>
    <a href="https://scrapit.ca/" target="_blank" rel="noopener noreferrer">
    https://scrapit.ca/
    </a>
  </Table.Cell>
</Table.Row>

<Table.Row>
  <Table.RowHeaderCell>CleanBC Go Electric Program</Table.RowHeaderCell>
  <Table.Cell>Get an EV for less</Table.Cell>
  <Table.Cell>
    <a href="https://goelectricbc.gov.bc.ca/" target="_blank" rel="noopener noreferrer">
    https://goelectricbc.gov.bc.ca/
    </a>
  </Table.Cell>
</Table.Row>

<Table.Row>
  <Table.RowHeaderCell>Specialty-Use Vehicle Incentive (SUVI) Program</Table.RowHeaderCell>
  <Table.Cell>Apply rebate for eligible vehicles</Table.Cell>
  <Table.Cell>
    <a href="https://pluginbc.ca/goelectricrebates/" target="_blank" rel="noopener noreferrer">
    https://pluginbc.ca/goelectricrebates/
    </a>
  </Table.Cell>
</Table.Row>

<Table.Row>
  <Table.RowHeaderCell>AGPAL Program and Service Finder</Table.RowHeaderCell>
  <Table.Cell>Indigenous Pathfinder Service</Table.Cell>
  <Table.Cell>
    <a href="https://agpal.ca/en/home" target="_blank" rel="noopener noreferrer">
    https://agpal.ca/en/home
    </a>
  </Table.Cell>
</Table.Row>

<Table.Row>
  <Table.RowHeaderCell>Clean tech funding options and benefi ts</Table.RowHeaderCell>
  <Table.Cell>Clean tech funding options and benefits</Table.Cell>
  <Table.Cell>
    <a href="https://ised-isde.canada.ca/site/clean-growth-hub/en/funding-opportunities" target="_blank" rel="noopener noreferrer">
    https://ised-isde.canada.ca/site/clean-growth-hub/en/funding-opportunities
    </a>
  </Table.Cell>
</Table.Row>


<Table.Row>
  <Table.RowHeaderCell>Energy Savings Rebate Program</Table.RowHeaderCell>
  <Table.Cell>ENERGY STAR certified smart thermostat</Table.Cell>
  <Table.Cell>
    <a href="https://www.canada.ca/en/environment-climate-change/news/2019/08/energy-savings-rebate-program.html" target="_blank" rel="noopener noreferrer">
    https://www.canada.ca/en/environment-climate-change/news/2019/08/energy-savings-rebate-program.html
    </a>
  </Table.Cell>
</Table.Row>

<Table.Row>
  <Table.RowHeaderCell>Zero Emission Vehicles Incentives</Table.RowHeaderCell>
  <Table.Cell>Federal incentives for buying or leasing ZEVs</Table.Cell>
  <Table.Cell>
    <a href="https://www.canada.ca/en/services/transport/zero-emission-vehicles/zero-emission-vehicles-incentives.html" target="_blank" rel="noopener noreferrer">
    https://www.canada.ca/en/services/transport/zero-emission-vehicles/zero-emission-vehicles-incentives.html
    </a>
  </Table.Cell>
</Table.Row>


            </Table.Body>
          </Table.Root>

        

        </div>
      </div>
    </div>
  );
}

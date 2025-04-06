import {Avatar, Box, Button, DropdownMenu, Flex, Heading, IconButton, Tooltip} from "@radix-ui/themes"
import "./navbar.scss"
import {HamburgerMenuIcon, MoonIcon, SunIcon} from "@radix-ui/react-icons";
import {useDispatch, useSelector} from "react-redux";
import {getDarkMode, setDarkMode} from "@/store/theme.store.ts";

interface Props {
    title: string
}

export const NavBar = ({ title }: Props) => {
    const dispatch = useDispatch()
    const isDarkMode = useSelector(getDarkMode)

    const handleDarkMode = () => {
        dispatch(setDarkMode(!isDarkMode))
    }

    return <div className="navbar">
        <Flex gap="2">
            <IconButton>
                <HamburgerMenuIcon />
            </IconButton>
            <Heading>{title}</Heading>
            <Box flexGrow="1"></Box>
            <Tooltip content={`${isDarkMode ? "Dark" : "Light"} Mode`}>
                <IconButton onClick={handleDarkMode}>
                    {isDarkMode ? <MoonIcon /> : <SunIcon />}
                </IconButton>
            </Tooltip>
            <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                    <Button variant="soft" style={{ padding: 0 }}>
                        <Avatar fallback="S" size="2" />
                    </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                    <DropdownMenu.Item>Fing</DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item>Log Out</DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Root>

        </Flex>
    </div>
}
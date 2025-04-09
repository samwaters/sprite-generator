import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import {ready} from "@/store/bootstrap.store";
import {Box, Container, Flex, Text, Theme} from "@radix-ui/themes"
import {getDarkMode} from "@/store/theme.store"
import {NavBar} from "@/components/NavBar/navbar"

import "@radix-ui/themes/styles.css"
import "./app.scss"
import {DropZone} from "@/components/DropZone/dropzone.tsx";

export const App = () => {
    const dispatch = useDispatch()
    const darkMode = useSelector(getDarkMode)

    useEffect(() => {
        dispatch(ready())
    }, [])

    return <Theme
      accentColor="green"
      appearance={darkMode ? "dark" : "light"}
      grayColor="sage"
      panelBackground="translucent"
    >
      <Container className="container">
        <NavBar title="Sprite Generator" />
        <Flex flexGrow="1" gap="2" pt="2">
            <Box className="content">
                <DropZone />
            </Box>
            <Box className="sidebar">
                <Text>Hello</Text>
            </Box>
        </Flex>
      </Container>
    </Theme>
}

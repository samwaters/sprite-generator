import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import {ready} from "@/store/bootstrap.store";
import {Container, Text, Theme} from "@radix-ui/themes"
import {getDarkMode} from "@/store/theme.store"
import {NavBar} from "@/components/NavBar/navbar"

import "@radix-ui/themes/styles.css"
import "./app.scss"

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
      <Container >
        <NavBar title="Sprite Generator" />
        <Text>Hello</Text>
      </Container>
    </Theme>
}

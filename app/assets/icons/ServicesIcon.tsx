import * as React from "react"
import Svg, { Path } from "react-native-svg"
export default function ServicesIcon(props: any) {
    return (
        <Svg width={40} height={40} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <Path fill='#292D32' d="m22.9 21.2-4.1-4.1c.4-1 .2-2.3-.7-3.1-.9-.9-2.2-1.1-3.3-.6l1.9 1.9-1.4 1.4-2-2c-.5 1.1-.3 2.4.6 3.4.9.9 2.1 1.1 3.1.7l4.1 4.1c.2.2.5.2.6 0l1-1c.3-.3.3-.6.2-.7M10 12c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m3 14H2v-3c0-2.7 5.3-4 8-4 .5 0 1.2.1 1.9.2-.4.5-.6 1.1-.8 1.8-.4 0-.7-.1-1.1-.1-3 0-6.1 1.5-6.1 2.1v1.1h7.6c.3.8.9 1.4 1.5 1.9Z" />
        </Svg>
    )
}

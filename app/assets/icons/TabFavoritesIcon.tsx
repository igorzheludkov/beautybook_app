import * as React from "react"
import Svg, { Path } from "react-native-svg"
export default function TabFavoritesIcon(props: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.size || 40}
            height={props.size || 40}
            fill={props.color}
            viewBox="0 0 24 24"
            {...props}
        >
            <Path
                fill="#33363F"
                fillRule="evenodd"
                d="M12.404 20.802C14.028 19.97 20 16.568 20 11.5 20 7 16.267 4 12 4c-4.124 0-8 3-8 7.5 0 5.068 5.972 8.47 7.596 9.302.257.131.55.131.808 0Zm-.635-6.045L8.97 11.81c-.57-.6-.66-1.512-.216-2.211.738-1.166 2.456-1.108 3.114.104l.07.128c.026.05.098.05.124 0l.07-.128c.658-1.212 2.377-1.27 3.114-.104.443.7.354 1.61-.216 2.21l-2.799 2.947c-.092.097-.139.146-.195.157a.18.18 0 0 1-.072 0c-.056-.011-.103-.06-.195-.157Z"
                clipRule="evenodd" />
        </Svg>
    )
}

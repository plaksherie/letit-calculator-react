import CSS from "csstype"

export default function Svg() {
    const svgStyle: CSS.Properties = {
        position: "absolute",
        left: "-9999px",
        display: "none",
    }
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="0"
            height="0"
            className="visually-hidden"
            style={svgStyle}>
            <symbol id="iconAddress" viewBox="0 0 36.4 33.7">
                <path
                    d="M25.8 27.3h-4.2c-.6 0-1.1-.5-1.1-1.1V20h-3.9v6.3c0 .6-.5 1.1-1.1 1.1h-4.2c-.6 0-1.1-.5-1.1-1.1v-9H8.1c-.5 0-.9-.4-.9-.9 0-.3.1-.5.3-.7L18 6.5c.3-.3.8-.3 1.2 0l3.4 2.9v-1c0-.4.3-.6.6-.6h3.2c.4 0 .6.3.6.6v5.1l2.6 2.3c.4.2.4.8.1 1.2-.2.2-.4.3-.7.3h-2.2v9c.1.6-.4 1-1 1zm-9.2-8.2h3.9c.5 0 .9.4.9.9v6.3c0 .1.1.2.2.2h4.2c.1 0 .2-.1.2-.2v-9.9h3l-2.9-2.5V8.6h-2.8v2.8l-4.8-4.2-10.4 9.2h3v9.9c0 .1.1.2.2.2h4.2c.1 0 .2-.1.2-.2V20c.1-.5.4-.9.9-.9z"/>
            </symbol>
            <symbol id="iconComplete" viewBox="0 0 31.9 36.4">
                <path
                    d="M8.1 9.6h3.2c.2.9 1.1 1.6 2.1 1.6H18c1 0 1.9-.7 2.1-1.6h2.8v8.9H24V9.4c0-.5-.4-.8-.8-.8h-3.1c-.3-1-1.1-1.7-2.1-1.7h-4.5c-1 0-1.9.7-2.1 1.6H7.9c-.5 0-.9.4-.9.9v15.8c0 .5.4.8.8.8h7.8v-1H8.1V9.6zM13.4 8H18c.6 0 1 .5 1 1.1s-.5 1.1-1.1 1.1h-4.5c-.6 0-1.1-.5-1.1-1.1S12.8 8 13.4 8zM22.3 25l-1.5-1.5-.8.8 1.9 1.9c.1.1.2.2.4.2s.3-.1.4-.2l2.6-3.1-.9-.7-2.1 2.6z"/>
                <path
                    d="M22.6 19.5c-2.7 0-5 2.2-5 5 0 2.7 2.2 5 5 5 2.7 0 5-2.2 5-5 0-2.7-2.2-5-5-5zm0 8.9c-2.1 0-3.9-1.7-3.9-3.9 0-2.1 1.7-3.9 3.9-3.9 2.1 0 3.9 1.7 3.9 3.9 0 2.1-1.7 3.9-3.9 3.9zM11.4 16h7.9v1.1h-7.9zM11.4 13.2h7.9v1.1h-7.9zM11.4 18.8h4.4v1.1h-4.4z"/>
            </symbol>
            <symbol id="iconWifi" viewBox="0 0 26.8 22.5">
                <path
                    d="M13.7 17.7c-.9 0-1.7-.7-1.7-1.7 0-.5.2-.9.5-1.2.7-.6 1.7-.6 2.4 0 .7.7.7 1.8 0 2.4-.3.3-.7.5-1.2.5zm0-2.4c-.4 0-.7.3-.7.7 0 .4.3.7.7.7.4 0 .7-.3.7-.7 0-.2-.1-.4-.2-.5-.1-.1-.3-.2-.5-.2zM16.1 13.2c-1.3-1.3-3.4-1.3-4.6 0l-.7-.7c1.7-1.7 4.4-1.7 6 0l-.7.7zM17.5 10.7c-2.2-2.2-5.7-2.2-7.9 0l-.7-.7c2.6-2.6 6.7-2.6 9.3 0l-.7.7z"/>
                <path d="M19.1 8.1C16 5 10.8 5 7.7 8.1L7 7.4c3.5-3.5 9.3-3.6 12.9 0l-.8.7z"/>
            </symbol>
            <symbol id="iconTv" viewBox="0 0 50 50">
                <path
                    d="M42.5 10.9H8.2c-1.3 0-2.3 1-2.3 2.3v19.9c0 1.3 1 2.3 2.3 2.3h7l-2.1 2.9c-.3.4-.2.9.2 1.2.4.3.9.2 1.2-.2l2.8-3.9h16l2.8 3.9c.3.4.8.5 1.2.2s.5-.8.2-1.2l-2.1-2.9h7c1.3 0 2.3-1 2.3-2.3V13.2c.1-1.3-1-2.3-2.2-2.3zm.6 22.2c0 .3-.3.6-.6.6H8.2c-.3 0-.6-.3-.6-.6V13.2c0-.3.3-.6.6-.6h34.3c.3 0 .6.3.6.6v19.9z"/>
                <path
                    d="M36.9 15.4c-.3-.3-.9-.3-1.2 0l-4.1 4.1c-.3.4-.3.9.1 1.2.3.3.8.3 1.1 0l4.1-4.1c.3-.4.3-.9 0-1.2zM39.4 17.4l-4.1 4.1c-.3.4-.3.9.1 1.2.3.3.8.3 1.1 0l4.1-4.1c.3-.4.3-.9-.1-1.2-.3-.3-.8-.3-1.1 0z"/>
            </symbol>
            <symbol id="iconCamera" viewBox="0 0 50 50">
                <path
                    d="M45.5 22.2L22.6 9c-1.8-1-4.1-.6-5.4 1l-4.6 5.8c-.8 1-1.1 2.2-.8 3.4.2 1.2 1 2.2 2 2.8l4.7 2.7-1 1.7c-.7 1.2-.6 2.7.2 3.9L16.3 32c-.1.1-.3.2-.4.2h-5.5V30c0-.5-.4-.8-.8-.8H5.8c-.5 0-.8.4-.8.8v8.6c0 .5.4.8.8.8h3.7c.5 0 .8-.4.8-.8v-1h6.1c1.4 0 2.8-.6 3.7-1.7l2.3-2.7c1.5.3 3.1-.4 3.9-1.7l1-1.7 7 4c.2.1.4.1.6.1.2-.1.4-.2.5-.4l.8-1.3c2.3.3 4.5-.8 5.6-2.8.7-1.2.9-2.7.6-4.1l3.2-1.6c.3-.1.4-.4.5-.7-.2-.3-.3-.6-.6-.8zm-20.8 8.4c-.3.4-.7.8-1.2.9-.5.1-1 .1-1.5-.2l-2.4-1.4c-.4-.3-.8-.7-.9-1.2-.1-.5-.1-1 .2-1.5l1-1.7 5.8 3.3-1 1.8zm-8.3 5.3h-6.1v-2h5.5c.7 0 1.3-.3 1.7-.8l1.4-1.7 1.8 1-2 2.3c-.5.8-1.4 1.2-2.3 1.2zm2.6-4.8zm21.2-2.5c-.7 1.2-1.9 1.9-3.2 2l2-3.5 1.7-.9c.1.8 0 1.6-.5 2.4zm3.1-5.7l-4.9 2.5L17 13l1.5-2c.5-.6 1.2-1 2-1 .4 0 .9.1 1.2.3l21.6 12.6zm-6 3.8l-3 5.2-19.7-11.3c-.6-.4-1.1-1-1.2-1.7-.1-.7 0-1.5.5-2l2-2.5 21.4 12.3zM8.6 30.9v6.9h-2v-6.9h2z"/>
            </symbol>
            <symbol id="iconAccept" viewBox="0 0 100 100">
                <path
                    d="M68.5625 31.0625C69.4429 30.2243 70.6145 29.7609 71.8301 29.7701C73.0457 29.7793 74.2102 30.2604 75.0778 31.1118C75.9454 31.9632 76.4484 33.1184 76.4805 34.3336C76.5126 35.5488 76.0714 36.7289 75.25 37.625L50.3125 68.8125C49.8837 69.2743 49.3662 69.645 48.7908 69.9023C48.2155 70.1595 47.5942 70.2982 46.9641 70.3098C46.334 70.3215 45.7079 70.206 45.1235 69.9702C44.539 69.7344 44.0081 69.3831 43.5625 68.9375L27.025 52.4C26.5645 51.9708 26.1951 51.4533 25.9389 50.8783C25.6827 50.3033 25.5449 49.6826 25.5338 49.0532C25.5227 48.4239 25.6385 47.7987 25.8742 47.215C26.11 46.6313 26.4609 46.1011 26.906 45.656C27.3511 45.2109 27.8813 44.86 28.465 44.6242C29.0487 44.3885 29.6739 44.2727 30.3033 44.2838C30.9327 44.2949 31.5534 44.4326 32.1284 44.6888C32.7034 44.945 33.2209 45.3144 33.65 45.775L46.7375 58.8562L68.4438 31.2C68.4828 31.1519 68.5183 31.106 68.5625 31.0625Z"/>
            </symbol>
            <symbol id="iconClose" viewBox="0 0 100 100">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M86.5875 13.4125C86.8785 13.7028 87.1094 14.0476 87.2669 14.4273C87.4245 14.8069 87.5056 15.2139 87.5056 15.625C87.5056 16.036 87.4245 16.443 87.2669 16.8227C87.1094 17.2023 86.8785 17.5472 86.5875 17.8375L17.8375 86.5875C17.2507 87.1743 16.4548 87.5039 15.625 87.5039C14.7951 87.5039 13.9993 87.1743 13.4125 86.5875C12.8257 86.0007 12.496 85.2048 12.496 84.375C12.496 83.5451 12.8257 82.7493 13.4125 82.1625L82.1625 13.4125C82.4528 13.1215 82.7976 12.8906 83.1773 12.733C83.5569 12.5755 83.9639 12.4944 84.375 12.4944C84.786 12.4944 85.193 12.5755 85.5727 12.733C85.9523 12.8906 86.2972 13.1215 86.5875 13.4125Z"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M13.4125 13.4125C13.1215 13.7028 12.8906 14.0476 12.733 14.4273C12.5755 14.8069 12.4944 15.2139 12.4944 15.625C12.4944 16.036 12.5755 16.443 12.733 16.8227C12.8906 17.2023 13.1215 17.5472 13.4125 17.8375L82.1625 86.5875C82.7493 87.1743 83.5451 87.5039 84.375 87.5039C85.2048 87.5039 86.0007 87.1743 86.5875 86.5875C87.1743 86.0007 87.5039 85.2048 87.5039 84.375C87.5039 83.5451 87.1743 82.7493 86.5875 82.1625L17.8375 13.4125C17.5472 13.1215 17.2023 12.8906 16.8227 12.733C16.443 12.5755 16.036 12.4944 15.625 12.4944C15.2139 12.4944 14.8069 12.5755 14.4273 12.733C14.0476 12.8906 13.7028 13.1215 13.4125 13.4125Z"/>
            </symbol>
            <symbol id="iconNext" viewBox="0 0 35 35">
                <path d="M21.0109 13.2402C21.4102 13.6504 22.1023 14.2988 22.6346 14.7884" stroke="#155DFD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M24.1034 18.2021H8.68756" stroke="#155DFD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M1.13178 17.1834C1.13178 26.1212 8.37732 33.3667 17.3152 33.3667C26.253 33.3667 33.4985 26.1212 33.4985 17.1834C33.4985 8.24554 26.253 1 17.3152 1C8.37732 1 1.13178 8.24554 1.13178 17.1834Z" stroke="#155DFD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </symbol>
        </svg>
    )
}

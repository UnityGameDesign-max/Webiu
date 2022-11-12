import React from "react"
import { SpeakerSectionThemeFive } from "./index"

import "bootstrap/dist/css/bootstrap.css"

export default {
  title: "Theme 5/SpeakerSectionThemeFive",
  component: SpeakerSectionThemeFive,
  argsTypes: {
    speakers: { control: "object" },
    speakerHeading: { control: "text" },
    linearGradient: { control: "text" },
    backgroundImage: { control: "text" },
  },
}

export const speakerSectionThemeFive = args => (
  <SpeakerSectionThemeFive {...args} />
)

speakerSectionThemeFive.args = {
  speakers: [
    {
      image:
        "https://s3-alpha-sig.figma.com/img/5b99/0e87/0a24e19097a429fa1e4ea4fe85009337?Expires=1668988800&Signature=hVvqx0UbU9vjyu92ScjgGurqZp3EPQzdctonKbljToVmowHVFuPsPMH1oOB0WTgOCSND5a2fKHRAJFPPS5FQgAmD99AVcI3MAMVAZHOuDGPeHFzfYo0OLSHk27ZXVQRDQ9p3W4AQ0bxtPCmGdgCP6uQJPu52mg1dV~tiHrewj3g7Bm6EidocGu0VJEbU4aN7VrGEDvAnj1CpNFM-TZPhLVVlYR5~N1flrLtyj4DOZU0flxEatRQ~L3UiTbtMJKLvxS6OAvLll3HjXe~-am-puIDzuUHJiZKIwa~yyPS1PeekA~OoKDdKF8v4uhIRkZoDu~tn0b7TBjSFGS6GPRV~dA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      occupation: "Founder",
      name: "Albert Barnes",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/a470/9e10/544067f9f277b3b2218ddcc69d70e310?Expires=1668988800&Signature=EEYQbHDChQ-Ce4OlOaILoPubjLxwUNxeJs2b7gbHwmUW-9u0lbuNkXH1BVrlj~k4qBxcjZNh8uji75oyPogKD9rtcQiNuFAHjlnQkFQBBdO61SO6v6l1kvRohAJJq3rIq0sNfyxw969-PS7QCCoBpuu5tfXfG76QCQJR96TBoKpw6GAX7f-MaT0aRJrZ231DWr~RuQS3kd-JmMLH2-Ke503uSBjRa6K5NztO9b4nLDUdPILtedShxQa6dvtghjjizD28NTpuU06T1mGWl~CaNpHKaw15EgwTRaQxN878ejZ8k-gXZ4Hf8aNwvl6pgWyxJrE7j3BlnZhYemXhJ-qr2Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      occupation: "Founder",
      name: "Albert Barnes",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/fa66/469c/fd2931967c90c5db58c4987bc71f04e4?Expires=1668988800&Signature=VFPYZOl86llTedT0XVwkG04b8b8NYbvMm0g2F~pjVn3wqraTaN2Ocnap-sSetW2l-dyR5-VF~OpGFJ6iQMK0g1cQ04PoOes0OvsW62qsVAn75x~-HevVscWrvhYTxoRcKgJyUSmCbvl4ThJLHlPmpQeXc9G8Fe1wkIIPwgMbOfKOBObWGnGjQnutV1umOtgGQif9DdssBPg5f7-3gat49Pws8Kh4elv0EJATPK~nZ9UbgHRi-DL2c8~yc60P6zMbhFyrTBGgKLcPRJeOf8OCXWJ3Vm3fXqSRwKc-ECtCuj3yetxZdsTnraweHQF9Mj-a8uhvnNuv-2z~ob1vBB1j0Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      occupation: "Founder",
      name: "Albert Barnes",
    },
    {
      image:
        "https://www.figma.com/file/0ISIz6XklEToDd4KXfIWRB/image/e2fa7199a889011b233ca3eec8f3f7e29a3374cf",
      occupation: "Founder",
      name: "Albert Barnes",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/ebc7/9207/5bcc5f8206d8ae6dd137444285d67747?Expires=1668988800&Signature=DVXNlAxr-k8773N9i6d5cxI-U41BfQD98lBRfL-znNYAOrD~5ibxn2aNChKWFDWDeuH0N~nfwKhYr5woEWvxJTeSGlj4dnjpjjugye~UOcvqylJpYyH9FNxdJUbJKmhgp9f~DEWOrIL-bstKUGY-JuqBLHqdO8d~D3ZnQQLPIhuZK~AafaRJiCRYlYCXXxGBWwEwpGd75LGJmF~BpXaXUBGZZTfDDPqrqt~OrdlnFdYvlnq03sTi3oXQQiCOAzovi~SNdgkhlZyXJnniwysD56n87q7QCgUqUMKqD7hrE6tpUy5Mw86mFpxP2atVpuWmiFSLAUaIUfwgKdX9NgNQGQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      occupation: "Founder",
      name: "Albert Barnes",
    },

    {
      image:
        "https://s3-alpha-sig.figma.com/img/9a89/f0e4/d12fe139a2907257e5d1e08d14913f53?Expires=1668988800&Signature=QObSXLLpXYiAqYofdf41a2oQbgwxMBkV9TBWEXiZ5yce-YHAYhkVeWgnmKYZ9rVApqfzJQlcslLg1zwNvF4yONGA7tf6MOQzrXY6zRHgrggQdL0EQpHlI2PzBSVqezf1ggtIAiI0Vhww-vbt1G75H8Id0bOTZei1rOGgSZPmFTJNIPvm8px5BNTrDxdAFS38J9r0uejU0DEadNQrF2Cfsm0n8WoGtDAW~xX1RuR9~qJ0lv0td4OhNLoHBTzQH8byitPFnvNFYx8uURvZ~teWryGSkwC~fctKsc4fF~933eTd3M6xV7xQRyDVPOjT-og7bwGpEoD-RZzOeaebk9Zmhw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      occupation: "Founder",
      name: "Albert Barnes",
    },
  ],
  speakerHeading: "Meet our Speakers",
  linearGradient:
    "linear-gradient(122.33deg, #51AD28 -0.11%, rgba(61, 175, 115, 0) -0.11%, rgba(48, 173, 66, 0.991046) -0.11%, rgba(51, 174, 86, 0.83) 29.19%, rgba(55, 175, 117, 0.67) 74.48%, rgba(57, 175, 134, 0.946006) 99.32%, rgba(52, 176, 60, 0.934264) 101.71%, rgba(108, 174, 190, 0.615823) 101.87%, rgba(217, 217, 217, 0) 102.19%)",
  backgroundImage:
    "https://s3-alpha-sig.figma.com/img/9d70/8c25/3a080adabb0d026047f8dec5ef93cbb2?Expires=1668988800&Signature=SHArUoFyqxjnhz9fCFmU7VxjvVAuH2A8CQgT8BKkfeQ~zZxFXDct8GZQAzhpwvp-D6zFBTq~UDcGooHfkM~29fKCSQ6GTi6Rk~LIWu4Z9H0B6OMoEf4ZCFA55r9bmqhIJ7lzHLZoWiw55XToewqpbPSQF4PjA~GMi7i0emeRlt5pbDqH3DSI9BFlU8qIyiHu-YUS22XEp-wx9Gd~6f659RkS1QdOYJToq~lnnSvABmkdw0nea2pfvv32YdnF3NMRZtZ3uLNN~lr4wb4ChyjVomwS8k4WMcON35jF3Yx~M9Rzs2Rzsxb6z~LeCCMqd2wvqoDjSsdmzFUuLGn5pizZCQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
}

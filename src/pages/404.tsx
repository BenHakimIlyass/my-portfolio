import * as React from "react";
import Head from "next/head";
import { breakpoints } from "@utils";
import { Text, Vstack } from "@components";
import { withAnimation } from "../contextProvider";
import styled from "@xstyled/styled-components";
import Link from "next/link";

const Blog = () => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    ref.current.focus();
  }, []);
  return (
    <>
      <Head>
        <title>Ilyass Ben Hakim - 404 sorry! You've got lost</title>
      </Head>

      <MainPlayground space={3}>
        <Text clone="h4" textAlign="center">
          Feel lost?
        </Text>
        <Text clone="h4" textAlign="center">
          <Link href="/">
            <a ref={ref}>I got the home page</a>
          </Link>
        </Text>
        <svg width="1152" height="684" viewBox="0 0 1152 684" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M886.801 538.539L888.042 520.95M888.042 520.95L889.163 505.063C889.163 505.063 979 397 1150.5 407M888.042 520.95L891.313 519.464C891.313 519.464 883.782 523.435 878.567 525.256C878.155 525.399 877.744 524.986 877.699 524.552C876.872 516.69 880.3 508.541 879.645 508.29C878.898 508.002 868.472 513.916 868.472 513.916C868.472 513.916 855.801 534.301 861.475 545.654C867.515 557.738 874.084 538.534 875.008 530.717C875.834 523.737 874.596 511.682 868.016 514.123C861.437 516.564 848.769 568.454 849.557 553.267C849.915 546.363 850.847 537.852 850.847 537.852M852.043 522.48L850.847 537.852M850.847 537.852L853.986 536.426C853.986 536.426 846.91 540.191 841.24 542.218C840.72 542.404 839.932 542.425 839.916 541.721C839.728 533.019 842.07 525.914 842.07 525.914C842.07 525.914 603.871 583.265 450 573C267.1 560.799 187.5 434 0 439.5"
            stroke="#FF7E06"
          />
        </svg>
      </MainPlayground>
    </>
  );
};
// Chnage the y value in MainPlayground 920 breakpoint by md
const MainPlayground = styled(Vstack)`
  margin-bottom: 100px;
  margin-top:10vh;
`;

export default withAnimation(Blog);

import Link from "next/link";
import { useSelector } from "react-redux";
export default function RightSide() {
  const theme = useSelector((state) => state.theme.value);
  return (
    <div className="mt-3 mt-lg-0">
      <h3 className="fs-3">Who Am I?</h3>
      <p className="fs-3">
        I’ve always been passionate about coding, and I’m eager to apply my
        programming skills to new pursuits. I love to interact with my team
        setting sharing my skills and knowledge. Having been studied on several
        programming languages, I can easily learn a new programming language and
        develop innovative applications.
      </p>
    </div>
  );
}

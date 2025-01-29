import { motion } from "framer-motion";
import { stringToColor } from "@/lib/stringToColor";

const FollowPointer = ({
  x,
  y,
  info,
}: {
  x: number;
  y: number;
  info: { name: string; email: string; avatar: string };
}) => {
  const color = stringToColor(info.email) || "1";

  return (
    <motion.div
      className=" h-4 w-4 rounded-full absolute z-50"
      style={{
        top: y,
        left: x,
        pointerEvents: "none",
      }}
      initial={{ scale: 1, opacity: 1 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 100 100"
        stroke={color}
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#1E90FF" />
            <stop offset="100%" stop-color="#8A2BE2" />
          </linearGradient>
        </defs>
        <path
          d="M15 10L50 90L65 55L90 45L15 10Z"
          fill="url(#gradient)"
          stroke="none"
          stroke-linejoin="round"
        />
      </svg>
      <motion.div
        style={{ backgroundColor: color }}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        className=" px-2 py-2 bg-neutral-200 text-black font-bold whitespace-nowrap min-w-max text-xs rounded-full"
      >
        {info?.name || info?.email}
      </motion.div>
    </motion.div>
  );
};
export default FollowPointer;

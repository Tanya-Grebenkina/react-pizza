import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
     className="pizza-block"
    speed={2}
    width={280}
    height={520}
    viewBox="0 0 280 520"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="3" y="307" rx="10" ry="10" width="280" height="24" /> 
    <rect x="11" y="348" rx="0" ry="0" width="269" height="0" /> 
    <rect x="0" y="356" rx="10" ry="10" width="280" height="77" /> 
    <rect x="0" y="455" rx="10" ry="10" width="95" height="30" /> 
    <rect x="125" y="447" rx="25" ry="25" width="152" height="45" /> 
    <rect x="6" y="36" rx="0" ry="0" width="272" height="256" />
  </ContentLoader>
)

export default Skeleton;
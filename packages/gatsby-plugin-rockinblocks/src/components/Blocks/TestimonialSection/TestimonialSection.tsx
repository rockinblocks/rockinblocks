import React, { FC } from "react"
import styles from "./TestimonialSection.scss"

export interface TestimonialSectionProps {
  exampleProp: string
}

export const TestimonialSection: FC<TestimonialSectionProps> = (): JSX.Element => {
  return (
    <div className={styles.testimonialSection}>
      <p>
        <strong>TestimonialSection</strong>
      </p>
      <p>Grabbed hold of your coat tail, but it come off in my hand.</p>
      <p>I reached for your lapel, but it weren&apos;t sewn on so grand.</p>
    </div>
  )
}

export default TestimonialSection

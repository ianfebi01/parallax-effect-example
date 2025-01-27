import { FunctionComponent, useRef } from 'react'
import { scalePow } from 'd3-scale'
import Shape from './Shape'

interface Props {
  myposy?: number
  winheight?: number
}

const ParallaxSection: FunctionComponent<Props> = ({ myposy }) => {
  const ref = useRef<HTMLElement>(null)

  const translate = scalePow().domain([-2000, 2000]).range([-100, 100])
  const opacity = scalePow()
    .domain([
      0,
      ref.current?.offsetHeight ? ref.current?.offsetHeight - 40 : 1000,
    ])
    .range([1, 0])

  return (
    <section
      ref={ref}
      id="home"
      className="main__section"
      style={{
        opacity: opacity.exponent(1)(myposy ? -myposy : 1),
      }}
    >
      <Shape myposy={myposy || 0} />
      <div className="banner-image">
        <div
          className="avatar-wrapper"
          style={{
            transform: `translateY(${translate.exponent(1)(
              myposy ? -myposy : 0
            )}px)`,
          }}
        >
          <div className="avatar"></div>
        </div>
      </div>
      <div
        className="profile-content"
        style={{
          transform: `translateY(${translate.exponent(1)(
            myposy ? -myposy : 0
          )}px)`,
        }}
      >
        <h1 className="profile-title">This is Parallax</h1>
        <div className="profile-bio">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ParallaxSection

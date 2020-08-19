import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import img1 from '../images/fanned-book.jpg'
import Img from 'gatsby-image'

const getImages = graphql`
	query Images {
		fixed: file(relativePath: { eq: "kids-reading-hero-image.jpg" }) {
			childImageSharp {
				fixed(width: 300, height: 400) {
					...GatsbyImageSharpFixed
				}
			}
		}
		fluid: file(relativePath: { eq: "fanned-book.jpg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
	}
`

export default function ImagesExample() {
	const data = useStaticQuery(getImages)
	console.log(data)
	return (
		<Wrapper>
			<article>
				<h3>Basic Image Import</h3>
				<img src={img1} className="basic" />
			</article>
			<article>
				<h3>Fixed Image/Blur</h3>
				<Img fixed={data.fixed.childImageSharp.fixed} />
			</article>
			<article>
				<h3>Fluid Image/SVG</h3>
				<Img fluid={data.fluid.childImageSharp.fluid} />
			</article>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	text-align: center;
	text-transform: uppercase;
	width: 80vw;
	margin: 0 auto 10rem auto;
	article {
		padding: 1rem;
		border: 3px solid red;
	}
	.basic {
		width: 100%;
	}
	@media (min-width: 992px) {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-column-gap: 1rem;
	}
`

import { graphql } from 'gatsby';
import ProjectsComponent from '../components/projects';

export default ProjectsComponent;
export const query = graphql`
	query {
		allMdxProject2(sort: { fields: date, order: DESC }) {
			nodes {
				repo
				preview
				description
				badges
				color
				slug
				service
				client
				title
				cover {
					childImageSharp {
						gatsbyImageData(width: 850, quality: 90)
					}
				}
			}
		}
	}
`;

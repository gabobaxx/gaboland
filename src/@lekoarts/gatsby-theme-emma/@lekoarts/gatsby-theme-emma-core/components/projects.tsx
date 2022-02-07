import * as React from 'react';
// import Projects from "../../../components/projects"
import Projects from '@lekoarts/gatsby-theme-emma/components/projects';

type Props = {
	data: {
		allMdxProject2: any;
		[key: string]: string;
	};
	[key: string]: any;
};

export default function EmmaCoreProjects({ ...props }: Props) {
	const {
		data: { allMdxProject2 },
	} = props;
	return <Projects projects={allMdxProject2.nodes} {...props} />;
}

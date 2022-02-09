import * as React from 'react';
// import Project from "../../../components/project"
import Project from '@lekoarts/gatsby-theme-emma/components/project';

type Props = {
	data: {
		project: any;
		[key: string]: any;
	};
	[key: string]: any;
};

export default function EmmaCoreProject({ ...props }: Props) {
	props.data.project = props.data.mdxProject2;
	return <Project {...props} />;
}

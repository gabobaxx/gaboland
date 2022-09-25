var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
		for (var name in all)
			__defProp(target, name, { get: all[name], enumerable: !0 });
	}, __copyProps = (to, from, except, desc) => {
		if (from && typeof from == 'object' || typeof from == 'function')
			for (let key of __getOwnPropNames(from))
				!__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
		return to;
	};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
		isNodeMode || !mod || !mod.__esModule ? __defProp(target, 'default', { value: mod, enumerable: !0 }) : target,
		mod
	)), __toCommonJS = (mod) => __copyProps(__defProp({}, '__esModule', { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
	assets: () => assets_manifest_default,
	assetsBuildDirectory: () => assetsBuildDirectory,
	entry: () => entry,
	publicPath: () => publicPath,
	routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// src/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
	default: () => handleRequest
});
var import_react = require('@remix-run/react'), import_server = require('react-dom/server'), import_jsx_dev_runtime = require('react/jsx-dev-runtime');
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
	let markup = (0, import_server.renderToString)(
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
			context: remixContext,
			url: request.url
		}, void 0, !1, {
			fileName: 'src/entry.server.tsx',
			lineNumber: 12,
			columnNumber: 5
		}, this)
	);
	return responseHeaders.set('Content-Type', 'text/html'), new Response('<!DOCTYPE html>' + markup, {
		status: responseStatusCode,
		headers: responseHeaders
	});
}

// src/root.tsx
var root_exports = {};
__export(root_exports, {
	default: () => App,
	meta: () => meta
});
var import_react2 = require('@remix-run/react'), import_jsx_dev_runtime = require('react/jsx-dev-runtime'), meta = () => ({
	charset: 'utf-8',
	title: 'New Remix App',
	viewport: 'width=device-width,initial-scale=1'
});
function App() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)('html', {
		lang: 'en',
		className: 'h-full',
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)('head', {
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
						fileName: 'src/root.tsx',
						lineNumber: 23,
						columnNumber: 5
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Links, {}, void 0, !1, {
						fileName: 'src/root.tsx',
						lineNumber: 24,
						columnNumber: 5
					}, this)
				]
			}, void 0, !0, {
				fileName: 'src/root.tsx',
				lineNumber: 22,
				columnNumber: 4
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)('body', {
				className: 'h-full',
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
						fileName: 'src/root.tsx',
						lineNumber: 27,
						columnNumber: 5
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
						fileName: 'src/root.tsx',
						lineNumber: 28,
						columnNumber: 5
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
						fileName: 'src/root.tsx',
						lineNumber: 29,
						columnNumber: 5
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
						fileName: 'src/root.tsx',
						lineNumber: 30,
						columnNumber: 5
					}, this)
				]
			}, void 0, !0, {
				fileName: 'src/root.tsx',
				lineNumber: 26,
				columnNumber: 4
			}, this)
		]
	}, void 0, !0, {
		fileName: 'src/root.tsx',
		lineNumber: 21,
		columnNumber: 3
	}, this);
}

// src/routes/posts/$slug.tsx
var slug_exports = {};
__export(slug_exports, {
	default: () => PostSlug,
	loader: () => loader
});
var import_marked = require('marked'), import_node = require('@remix-run/node'), import_react3 = require('@remix-run/react'), import_tiny_invariant = __toESM(require('tiny-invariant'));

// src/models/posts.server.ts
var posts = [
	{
		slug: 'my-first-post',
		title: 'My First Post',
		markdown: '### This is amazing'
	},
	{
		slug: '90s-mixtape',
		title: 'A Mixtape I Made Just For You',
		markdown: 'This is amazing'
	}
];
async function getPosts() {
	return posts;
}
async function getPost(slug) {
	return posts.find((post) => post.slug === slug);
}
async function createPost(post) {
	return posts.push(post);
}

// src/routes/posts/$slug.tsx
var import_jsx_dev_runtime = require('react/jsx-dev-runtime'), loader = async ({ params }) => {
	(0, import_tiny_invariant.default)(params.slug, 'params.slug is required');
	let post = await getPost(params.slug);
	(0, import_tiny_invariant.default)(post, `Post not found: ${params.slug}`);
	let html = (0, import_marked.marked)(post.markdown);
	return (0, import_node.json)({ post, html });
};
function PostSlug() {
	let { post, html } = (0, import_react3.useLoaderData)();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)('main', {
		className: 'mx-auto max-w-4xl',
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)('h1', {
				className: 'my-6 border-b-2 text-center text-3xl',
				children: post.title
			}, void 0, !1, {
				fileName: 'src/routes/posts/$slug.tsx',
				lineNumber: 28,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)('div', {
				dangerouslySetInnerHTML: { __html: html }
			}, void 0, !1, {
				fileName: 'src/routes/posts/$slug.tsx',
				lineNumber: 31,
				columnNumber: 4
			}, this)
		]
	}, void 0, !0, {
		fileName: 'src/routes/posts/$slug.tsx',
		lineNumber: 27,
		columnNumber: 5
	}, this);
}

// src/routes/posts/admin.tsx
var admin_exports = {};
__export(admin_exports, {
	default: () => PostAdmin,
	loader: () => loader2
});
var import_node2 = require('@remix-run/node'), import_react4 = require('@remix-run/react');
var import_jsx_dev_runtime = require('react/jsx-dev-runtime'), loader2 = async () => (0, import_node2.json)({ posts: await getPosts() });
function PostAdmin() {
	let { posts: posts2 } = (0, import_react4.useLoaderData)();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)('div', {
		className: 'mx-auto max-w-4xl',
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)('h1', {
				className: 'my-6 mb-2 border-b-2 text-center text-3xl',
				children: 'Blog Admin'
			}, void 0, !1, {
				fileName: 'src/routes/posts/admin.tsx',
				lineNumber: 19,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)('div', {
				className: 'grid grid-cols-4 gap-6',
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)('nav', {
						className: 'col-span-4 md:col-span-1',
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)('ul', {
							children: posts2.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)('li', {
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.Link, {
									to: post.slug,
									className: 'text-blue-600 underline',
									children: post.title
								}, void 0, !1, {
									fileName: 'src/routes/posts/admin.tsx',
									lineNumber: 27,
									columnNumber: 17
								}, this)
							}, post.slug, !1, {
								fileName: 'src/routes/posts/admin.tsx',
								lineNumber: 26,
								columnNumber: 15
							}, this))
						}, void 0, !1, {
							fileName: 'src/routes/posts/admin.tsx',
							lineNumber: 24,
							columnNumber: 11
						}, this)
					}, void 0, !1, {
						fileName: 'src/routes/posts/admin.tsx',
						lineNumber: 23,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)('main', {
						className: 'col-span-4 md:col-span-3',
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.Outlet, {}, void 0, !1, {
							fileName: 'src/routes/posts/admin.tsx',
							lineNumber: 38,
							columnNumber: 13
						}, this)
					}, void 0, !1, {
						fileName: 'src/routes/posts/admin.tsx',
						lineNumber: 37,
						columnNumber: 9
					}, this)
				]
			}, void 0, !0, {
				fileName: 'src/routes/posts/admin.tsx',
				lineNumber: 22,
				columnNumber: 7
			}, this)
		]
	}, void 0, !0, {
		fileName: 'src/routes/posts/admin.tsx',
		lineNumber: 18,
		columnNumber: 5
	}, this);
}

// src/routes/posts/admin/index.tsx
var admin_exports2 = {};
__export(admin_exports2, {
	default: () => AdminIndex
});
var import_react5 = require('@remix-run/react'), import_jsx_dev_runtime = require('react/jsx-dev-runtime');
function AdminIndex() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)('p', {
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Link, {
			to: 'new',
			className: 'text-blue-600 underline',
			children: 'Create a New Post'
		}, void 0, !1, {
			fileName: 'src/routes/posts/admin/index.tsx',
			lineNumber: 6,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: 'src/routes/posts/admin/index.tsx',
		lineNumber: 5,
		columnNumber: 5
	}, this);
}

// src/routes/posts/admin/new.tsx
var new_exports = {};
__export(new_exports, {
	action: () => action,
	default: () => NewPost
});
var import_node3 = require('@remix-run/node'), import_react6 = require('@remix-run/react');
var import_tiny_invariant2 = __toESM(require('tiny-invariant')), import_jsx_dev_runtime = require('react/jsx-dev-runtime'), action = async ({ request }) => {
		await new Promise((res) => setTimeout(res, 1e3));
		let formData = await request.formData(), title = formData.get('title'), slug = formData.get('slug'), markdown = formData.get('markdown'), errors = {
			title: title ? null : 'Title is required',
			slug: slug ? null : 'Slug is required',
			markdown: markdown ? null : 'Markdown is required'
		};
		return Object.values(errors).some(
			(errorMessage) => errorMessage
		) ? (0, import_node3.json)(errors) : ((0, import_tiny_invariant2.default)(
				typeof title == 'string',
				'title must be a string'
			), (0, import_tiny_invariant2.default)(
				typeof slug == 'string',
				'slug must be a string'
			), (0, import_tiny_invariant2.default)(
				typeof markdown == 'string',
				'markdown must be a string'
			), await createPost({ title, slug, markdown }), (0, import_node3.redirect)('/posts/admin'));
	}, inputClassName = 'w-full rounded border border-gray-500 px-2 py-1 text-lg';
function NewPost() {
	let errors = (0, import_react6.useActionData)(), transition = (0, import_react6.useTransition)(), isCreating = Boolean(transition.submission);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.Form, {
		method: 'post',
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)('p', {
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)('label', {
					children: [
						'Post Title:',
						' ',
						errors != null && errors.title ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)('em', {
							className: 'text-red-600',
							children: errors.title
						}, void 0, !1, {
							fileName: 'src/routes/posts/admin/new.tsx',
							lineNumber: 69,
							columnNumber: 13
						}, this) : null,
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)('input', {
							type: 'text',
							name: 'title',
							className: inputClassName
						}, void 0, !1, {
							fileName: 'src/routes/posts/admin/new.tsx',
							lineNumber: 71,
							columnNumber: 11
						}, this)
					]
				}, void 0, !0, {
					fileName: 'src/routes/posts/admin/new.tsx',
					lineNumber: 66,
					columnNumber: 9
				}, this)
			}, void 0, !1, {
				fileName: 'src/routes/posts/admin/new.tsx',
				lineNumber: 65,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)('p', {
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)('label', {
					children: [
						'Post Slug:',
						' ',
						errors != null && errors.slug ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)('em', {
							className: 'text-red-600',
							children: errors.slug
						}, void 0, !1, {
							fileName: 'src/routes/posts/admin/new.tsx',
							lineNumber: 82,
							columnNumber: 13
						}, this) : null,
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)('input', {
							type: 'text',
							name: 'slug',
							className: inputClassName
						}, void 0, !1, {
							fileName: 'src/routes/posts/admin/new.tsx',
							lineNumber: 84,
							columnNumber: 11
						}, this)
					]
				}, void 0, !0, {
					fileName: 'src/routes/posts/admin/new.tsx',
					lineNumber: 79,
					columnNumber: 9
				}, this)
			}, void 0, !1, {
				fileName: 'src/routes/posts/admin/new.tsx',
				lineNumber: 78,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)('p', {
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)('label', {
						htmlFor: 'markdown',
						children: [
							'Markdown:',
							errors != null && errors.markdown ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)('em', {
								className: 'text-red-600',
								children: errors.markdown
							}, void 0, !1, {
								fileName: 'src/routes/posts/admin/new.tsx',
								lineNumber: 94,
								columnNumber: 13
							}, this) : null
						]
					}, void 0, !0, {
						fileName: 'src/routes/posts/admin/new.tsx',
						lineNumber: 92,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)('br', {}, void 0, !1, {
						fileName: 'src/routes/posts/admin/new.tsx',
						lineNumber: 99,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)('textarea', {
						id: 'markdown',
						rows: 20,
						name: 'markdown',
						className: `${inputClassName} font-mono`
					}, void 0, !1, {
						fileName: 'src/routes/posts/admin/new.tsx',
						lineNumber: 100,
						columnNumber: 9
					}, this)
				]
			}, void 0, !0, {
				fileName: 'src/routes/posts/admin/new.tsx',
				lineNumber: 91,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)('p', {
				className: 'text-right',
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)('button', {
					type: 'submit',
					className: 'rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300',
					disabled: isCreating,
					children: isCreating ? 'Creating...' : 'Create Post'
				}, void 0, !1, {
					fileName: 'src/routes/posts/admin/new.tsx',
					lineNumber: 108,
					columnNumber: 9
				}, this)
			}, void 0, !1, {
				fileName: 'src/routes/posts/admin/new.tsx',
				lineNumber: 107,
				columnNumber: 7
			}, this)
		]
	}, void 0, !0, {
		fileName: 'src/routes/posts/admin/new.tsx',
		lineNumber: 64,
		columnNumber: 5
	}, this);
}

// src/routes/posts/index.tsx
var posts_exports = {};
__export(posts_exports, {
	default: () => Posts,
	loader: () => loader3
});
var import_node4 = require('@remix-run/node'), import_react7 = require('@remix-run/react');
var import_jsx_dev_runtime = require('react/jsx-dev-runtime'), loader3 = async () => (0, import_node4.json)({
	posts: await getPosts()
});
function Posts() {
	let { posts: posts2 } = (0, import_react7.useLoaderData)();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)('main', {
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)('h1', {
				children: 'Posts'
			}, void 0, !1, {
				fileName: 'src/routes/posts/index.tsx',
				lineNumber: 23,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)('ul', {
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)('li', {
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.Link, {
							to: 'admin',
							className: 'text-red-600 underline',
							children: 'Admin'
						}, void 0, !1, {
							fileName: 'src/routes/posts/index.tsx',
							lineNumber: 26,
							columnNumber: 9
						}, this)
					}, void 0, !1, {
						fileName: 'src/routes/posts/index.tsx',
						lineNumber: 26,
						columnNumber: 5
					}, this),
					posts2.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)('li', {
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.Link, {
							to: post.slug,
							className: 'text-blue-600 underline',
							children: post.title
						}, void 0, !1, {
							fileName: 'src/routes/posts/index.tsx',
							lineNumber: 31,
							columnNumber: 13
						}, this)
					}, post.slug, !1, {
						fileName: 'src/routes/posts/index.tsx',
						lineNumber: 30,
						columnNumber: 11
					}, this))
				]
			}, void 0, !0, {
				fileName: 'src/routes/posts/index.tsx',
				lineNumber: 25,
				columnNumber: 5
			}, this)
		]
	}, void 0, !0, {
		fileName: 'src/routes/posts/index.tsx',
		lineNumber: 21,
		columnNumber: 5
	}, this);
}

// src/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
	default: () => Index
});
var import_react8 = require('@remix-run/react'), import_jsx_dev_runtime = require('react/jsx-dev-runtime');
function Index() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)('div', {
		className: 'mx-auto mt-16 max-w-7xl text-center',
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react8.Link, {
			to: '/posts',
			className: 'text-xl text-blue-600 underline',
			children: 'Blog Posts'
		}, void 0, !1, {
			fileName: 'src/routes/index.tsx',
			lineNumber: 6,
			columnNumber: 3
		}, this)
	}, void 0, !1, {
		fileName: 'src/routes/index.tsx',
		lineNumber: 5,
		columnNumber: 3
	}, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: '65de7f74', entry: { module: '/build/entry.client-5CYUSDIX.js', imports: ['/build/_shared/chunk-SAZML2IU.js'] }, routes: { root: { id: 'root', parentId: void 0, path: '', index: void 0, caseSensitive: void 0, module: '/build/root-WOXPWNC3.js', imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, 'routes/index': { id: 'routes/index', parentId: 'root', path: void 0, index: !0, caseSensitive: void 0, module: '/build/routes/index-H3NFVWIR.js', imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, 'routes/posts/$slug': { id: 'routes/posts/$slug', parentId: 'root', path: 'posts/:slug', index: void 0, caseSensitive: void 0, module: '/build/routes/posts/$slug-EQUFCMZA.js', imports: ['/build/_shared/chunk-XFEYG6M3.js'], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, 'routes/posts/admin': { id: 'routes/posts/admin', parentId: 'root', path: 'posts/admin', index: void 0, caseSensitive: void 0, module: '/build/routes/posts/admin-UYG3TEUN.js', imports: ['/build/_shared/chunk-XFEYG6M3.js'], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, 'routes/posts/admin/index': { id: 'routes/posts/admin/index', parentId: 'routes/posts/admin', path: void 0, index: !0, caseSensitive: void 0, module: '/build/routes/posts/admin/index-JUNJ53KZ.js', imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, 'routes/posts/admin/new': { id: 'routes/posts/admin/new', parentId: 'routes/posts/admin', path: 'new', index: void 0, caseSensitive: void 0, module: '/build/routes/posts/admin/new-W7QIDO3Q.js', imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, 'routes/posts/index': { id: 'routes/posts/index', parentId: 'root', path: 'posts', index: !0, caseSensitive: void 0, module: '/build/routes/posts/index-3GOAC7OL.js', imports: ['/build/_shared/chunk-XFEYG6M3.js'], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: '/build/manifest-65DE7F74.js' };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = 'public/build', publicPath = '/build/', entry = { module: entry_server_exports }, routes = {
	root: {
		id: 'root',
		parentId: void 0,
		path: '',
		index: void 0,
		caseSensitive: void 0,
		module: root_exports
	},
	'routes/posts/$slug': {
		id: 'routes/posts/$slug',
		parentId: 'root',
		path: 'posts/:slug',
		index: void 0,
		caseSensitive: void 0,
		module: slug_exports
	},
	'routes/posts/admin': {
		id: 'routes/posts/admin',
		parentId: 'root',
		path: 'posts/admin',
		index: void 0,
		caseSensitive: void 0,
		module: admin_exports
	},
	'routes/posts/admin/index': {
		id: 'routes/posts/admin/index',
		parentId: 'routes/posts/admin',
		path: void 0,
		index: !0,
		caseSensitive: void 0,
		module: admin_exports2
	},
	'routes/posts/admin/new': {
		id: 'routes/posts/admin/new',
		parentId: 'routes/posts/admin',
		path: 'new',
		index: void 0,
		caseSensitive: void 0,
		module: new_exports
	},
	'routes/posts/index': {
		id: 'routes/posts/index',
		parentId: 'root',
		path: 'posts',
		index: !0,
		caseSensitive: void 0,
		module: posts_exports
	},
	'routes/index': {
		id: 'routes/index',
		parentId: 'root',
		path: void 0,
		index: !0,
		caseSensitive: void 0,
		module: routes_exports
	}
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
	assets,
	assetsBuildDirectory,
	entry,
	publicPath,
	routes
});
//# sourceMappingURL=index.js.map

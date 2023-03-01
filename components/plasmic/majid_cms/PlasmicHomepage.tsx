// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bsdq7xoP2pzFcwsFmrBqbQ
// Component: U8q5q9cPYjI_
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { CmsQueryRepeater } from "@plasmicpkgs/plasmic-cms"; // plasmic-import: 8N9-WfZSaq/codeComponent
import { CmsRowField } from "@plasmicpkgs/plasmic-cms"; // plasmic-import: w6HdOz-Pcn/codeComponent
import { CmsRowImage } from "@plasmicpkgs/plasmic-cms"; // plasmic-import: dj_Vc2QmFA/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_majid_cms.module.css"; // plasmic-import: bsdq7xoP2pzFcwsFmrBqbQ/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: U8q5q9cPYjI_/css

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  section?: p.Flex<"section">;
  h1?: p.Flex<"h1">;
  text?: p.Flex<"div">;
  cmsEntryImage?: p.Flex<typeof CmsRowImage>;
  img?: p.Flex<typeof p.PlasmicImg>;
};

export interface DefaultHomepageProps {}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            sty.root
          )}
        >
          <p.Stack
            as={"section"}
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            hasGap={true}
            className={classNames(projectcss.all, sty.section)}
          >
            <h1
              data-plasmic-name={"h1"}
              data-plasmic-override={overrides.h1}
              className={classNames(
                projectcss.all,
                projectcss.h1,
                projectcss.__wab_text,
                sty.h1
              )}
            >
              {"Hello!"}
            </h1>

            <div
              data-plasmic-name={"text"}
              data-plasmic-override={overrides.text}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text
              )}
            >
              {"How are you doing!"}
            </div>
          </p.Stack>

          <CmsQueryRepeater
            className={classNames("__wab_instance", sty.cmsDataLoader__o85J)}
            desc={false}
            emptyMessage={
              <ph.DataCtxReader>
                {$ctx => (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___0DaCv
                    )}
                  >
                    {"No matching published entries found."}
                  </div>
                )}
              </ph.DataCtxReader>
            }
            forceEmptyState={false}
            forceLoadingState={false}
            limit={0 as const}
            loadingMessage={
              <ph.DataCtxReader>
                {$ctx => (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__tYf4Q
                    )}
                  >
                    {"Loading..."}
                  </div>
                )}
              </ph.DataCtxReader>
            }
            noAutoRepeat={false}
            noLayout={false}
            useDraft={false}
          >
            <ph.DataCtxReader>
              {$ctx => (
                <div
                  className={classNames(projectcss.all, sty.freeBox___4D3Zc)}
                >
                  <CmsRowField
                    className={classNames(
                      "__wab_instance",
                      sty.cmsEntryField___1DYtZ
                    )}
                  />

                  <CmsRowField
                    className={classNames(
                      "__wab_instance",
                      sty.cmsEntryField__zqgqP
                    )}
                    field={"price" as const}
                  />
                </div>
              )}
            </ph.DataCtxReader>
          </CmsQueryRepeater>

          <div className={classNames(projectcss.all, sty.freeBox__zNd2J)}>
            <CmsQueryRepeater
              className={classNames("__wab_instance", sty.cmsDataLoader__xUivu)}
              desc={false}
              emptyMessage={
                <ph.DataCtxReader>
                  {$ctx => (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__mdhDg
                      )}
                    >
                      {"No matching published entries found."}
                    </div>
                  )}
                </ph.DataCtxReader>
              }
              forceEmptyState={false}
              forceLoadingState={false}
              limit={0 as const}
              loadingMessage={
                <ph.DataCtxReader>
                  {$ctx => (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___49XJo
                      )}
                    >
                      {"Loading..."}
                    </div>
                  )}
                </ph.DataCtxReader>
              }
              noAutoRepeat={false}
              noLayout={false}
              table={"testimonials" as const}
              useDraft={false}
            >
              <ph.DataCtxReader>
                {$ctx => (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__yPsa0)}
                  >
                    <CmsRowField
                      className={classNames(
                        "__wab_instance",
                        sty.cmsEntryField__uaon7
                      )}
                      field={"message" as const}
                    />

                    <div
                      className={classNames(projectcss.all, sty.freeBox__klxEx)}
                    >
                      <CmsRowImage
                        data-plasmic-name={"cmsEntryImage"}
                        data-plasmic-override={overrides.cmsEntryImage}
                        className={classNames(
                          "__wab_instance",
                          sty.cmsEntryImage
                        )}
                        srcProp={"src" as const}
                      >
                        <p.PlasmicImg
                          data-plasmic-name={"img"}
                          data-plasmic-override={overrides.img}
                          alt={""}
                          className={classNames(sty.img)}
                          displayHeight={"auto" as const}
                          displayMaxHeight={"none" as const}
                          displayMaxWidth={"32px" as const}
                          displayMinHeight={"0" as const}
                          displayMinWidth={"0" as const}
                          displayWidth={"32px" as const}
                          src={
                            "https://studio.plasmic.app/static/img/placeholder-full.png" as const
                          }
                        />
                      </CmsRowImage>

                      <CmsRowField
                        className={classNames(
                          "__wab_instance",
                          sty.cmsEntryField__yDYcI
                        )}
                        field={"name" as const}
                      />
                    </div>
                  </div>
                )}
              </ph.DataCtxReader>
            </CmsQueryRepeater>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "section", "h1", "text", "cmsEntryImage", "img"],
  section: ["section", "h1", "text"],
  h1: ["h1"],
  text: ["text"],
  cmsEntryImage: ["cmsEntryImage", "img"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  section: "section";
  h1: "h1";
  text: "div";
  cmsEntryImage: typeof CmsRowImage;
  img: typeof p.PlasmicImg;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    section: makeNodeComponent("section"),
    h1: makeNodeComponent("h1"),
    text: makeNodeComponent("text"),
    cmsEntryImage: makeNodeComponent("cmsEntryImage"),
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */

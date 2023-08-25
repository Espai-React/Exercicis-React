import HeadingContext from "../HeadingContext";
import SectionContext from "../SectionContext";

const PageContext = () => {
	return (
		<div>
			<h3>Page Context</h3>
			<SectionContext>
				<HeadingContext>Title</HeadingContext>
				<SectionContext>
					<HeadingContext>Heading</HeadingContext>
					<HeadingContext>Heading</HeadingContext>
					<HeadingContext>Heading</HeadingContext>
					<SectionContext>
						<HeadingContext>Sub-heading</HeadingContext>
						<HeadingContext>Sub-heading</HeadingContext>
						<HeadingContext>Sub-heading</HeadingContext>
						<SectionContext>
							<HeadingContext>Sub-sub-heading</HeadingContext>
							<HeadingContext>Sub-sub-heading</HeadingContext>
							<HeadingContext>Sub-sub-heading</HeadingContext>
						</SectionContext>
					</SectionContext>
				</SectionContext>
			</SectionContext>
		</div>
	);
};

export default PageContext;

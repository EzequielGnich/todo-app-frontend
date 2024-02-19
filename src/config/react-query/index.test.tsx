import { ReactQueryProvider } from ".";
import { render } from "../test-utils";

const renderComponent = () => {
  return render(
    <ReactQueryProvider>
      <div>Test</div>
    </ReactQueryProvider>
  );
};

describe("React query provider", () => {
  it("should render", () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });
});

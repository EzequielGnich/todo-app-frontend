import { Button, Modal } from "antd";
import { Formik } from "formik";
import { useTranslation } from "react-i18next";
import { CustomInput } from "../../../shared/custom-input";
import Typography from "../../../shared/typography";
import { ColorVariants } from "../../../shared/typography/models";
import { useGetEditTodo } from "../hooks";
import { TodoDTO, TodoStatus } from "../models";
import { TodoEditModalProps } from "./models";

const props = {
  okButtonProps: {
    style: {
      display: "none",
    },
  },
  cancelButtonProps: {
    style: {
      display: "none",
    },
  },
};

export const TodoEditModal: React.FC<TodoEditModalProps> = ({
  selectedTodo,
  setSelectedTodo,
}) => {
  const { handleEditTodo } = useGetEditTodo();
  const { t } = useTranslation();

  const handleCancel = () => {
    setSelectedTodo(null);
  };

  return (
    <Modal
      onCancel={handleCancel}
      open={!!selectedTodo}
      {...props}
      title={
        <Typography tag="h3" color={ColorVariants.BLACK_07}>
          {t("todos.modal.title")}
        </Typography>
      }
    >
      <Formik
        initialValues={{
          title: selectedTodo?.title || "",
          content: selectedTodo?.content || "",
          status: selectedTodo?.status || TodoStatus.ACTIVE,
        }}
        onSubmit={(values) => {
          const todo: TodoDTO = {
            content: values.content,
            status: values.status,
            title: values.title,
          };

          handleEditTodo({
            todo,
            todoId: selectedTodo?.id,
          });
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <input type="hidden" name="id" value={selectedTodo?.id} />

            <CustomInput
              placeholder={t("todos.modal.placeholder.title")}
              onChange={props.handleChange}
              value={props.values.title}
              name="title"
              type="text"
              id="title"
              required
            />

            <CustomInput
              placeholder={t("todos.modal.placeholder.content")}
              onChange={props.handleChange}
              value={props.values.content}
              name="content"
              id="content"
              type="text"
              required
            />

            <div>
              <Button onClick={handleCancel} type="default">
                {t("todos.modal.buttons.cancel")}
              </Button>
              <Button type="primary" htmlType="submit">
                {t("todos.modal.buttons.save")}
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </Modal>
  );
};

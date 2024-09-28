-- CreateTable
CREATE TABLE "Form" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Form_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InputField" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "placeholder" TEXT NOT NULL,
    "required" BOOLEAN NOT NULL,
    "disabled" BOOLEAN NOT NULL,
    "order" INTEGER NOT NULL,
    "formId" TEXT,

    CONSTRAINT "InputField_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SelectField" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "placeholder" TEXT NOT NULL,
    "required" BOOLEAN NOT NULL,
    "disabled" BOOLEAN NOT NULL,
    "order" INTEGER NOT NULL,
    "formId" TEXT,

    CONSTRAINT "SelectField_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Option" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "selectFieldId" TEXT,

    CONSTRAINT "Option_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "InputField" ADD CONSTRAINT "InputField_formId_fkey" FOREIGN KEY ("formId") REFERENCES "Form"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SelectField" ADD CONSTRAINT "SelectField_formId_fkey" FOREIGN KEY ("formId") REFERENCES "Form"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Option" ADD CONSTRAINT "Option_selectFieldId_fkey" FOREIGN KEY ("selectFieldId") REFERENCES "SelectField"("id") ON DELETE SET NULL ON UPDATE CASCADE;

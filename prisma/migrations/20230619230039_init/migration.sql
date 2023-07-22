-- CreateTable
CREATE TABLE "work_experiences" (
    "id" TEXT NOT NULL,
    "header" TEXT NOT NULL,
    "subHeader" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,

    CONSTRAINT "work_experiences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tags" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "companies" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_TagToWorkExperience" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "work_experiences_header_key" ON "work_experiences"("header");

-- CreateIndex
CREATE UNIQUE INDEX "tags_name_key" ON "tags"("name");

-- CreateIndex
CREATE UNIQUE INDEX "companies_name_key" ON "companies"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_TagToWorkExperience_AB_unique" ON "_TagToWorkExperience"("A", "B");

-- CreateIndex
CREATE INDEX "_TagToWorkExperience_B_index" ON "_TagToWorkExperience"("B");

-- AddForeignKey
ALTER TABLE "work_experiences" ADD CONSTRAINT "work_experiences_companyName_fkey" FOREIGN KEY ("companyName") REFERENCES "companies"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TagToWorkExperience" ADD CONSTRAINT "_TagToWorkExperience_A_fkey" FOREIGN KEY ("A") REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TagToWorkExperience" ADD CONSTRAINT "_TagToWorkExperience_B_fkey" FOREIGN KEY ("B") REFERENCES "work_experiences"("id") ON DELETE CASCADE ON UPDATE CASCADE;

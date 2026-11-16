const createCrudController = (Model, modelName) => {
  return {
    getAll: async (req, res) => {
      try {
        const query = { ...req.query };
        // Clean out pagination or non-field query params
        delete query.page;
        delete query.limit;
        delete query.search;

        let findQuery = Model.find(query);

        if (req.query.search) {
          const searchRegex = new RegExp(req.query.search, "i");
          if (Model.schema.paths.title) {
            findQuery = findQuery.or([{ title: searchRegex }]);
          } else if (Model.schema.paths.name) {
            findQuery = findQuery.or([{ name: searchRegex }]);
          } else if (Model.schema.paths.studentName) {
            findQuery = findQuery.or([{ studentName: searchRegex }]);
          } else if (Model.schema.paths.fullName) {
            findQuery = findQuery.or([{ fullName: searchRegex }]);
          }
        }

        const items = await findQuery.sort({ createdAt: -1 });
        return res.json({ success: true, count: items.length, data: items });
      } catch (err) {
        return res.status(500).json({ success: false, error: err.message });
      }
    },

    getById: async (req, res) => {
      try {
        const item = await Model.findById(req.params.id);
        if (!item) return res.status(404).json({ success: false, error: `${modelName} not found` });
        return res.json({ success: true, data: item });
      } catch (err) {
        return res.status(500).json({ success: false, error: err.message });
      }
    },

    create: async (req, res) => {
      try {
        const item = await Model.create(req.body);
        return res.status(201).json({ success: true, message: `${modelName} created`, data: item });
      } catch (err) {
        return res.status(400).json({ success: false, error: err.message });
      }
    },

    update: async (req, res) => {
      try {
        const item = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!item) return res.status(404).json({ success: false, error: `${modelName} not found` });
        return res.json({ success: true, message: `${modelName} updated`, data: item });
      } catch (err) {
        return res.status(400).json({ success: false, error: err.message });
      }
    },

    delete: async (req, res) => {
      try {
        const item = await Model.findByIdAndDelete(req.params.id);
        if (!item) return res.status(404).json({ success: false, error: `${modelName} not found` });
        return res.json({ success: true, message: `${modelName} deleted` });
      } catch (err) {
        return res.status(500).json({ success: false, error: err.message });
      }
    },
  };
};

module.exports = createCrudController;

const core = require("@actions/core");
try {
    const value1 = core.getInput("input1", { required: true });
    const value2 = core.getInput("input2", { required: true });

    core.setOutput("output1", value1);
    core.setOutput("output2", value2);
} catch (error) {
    core.setFailed(error.message);
}

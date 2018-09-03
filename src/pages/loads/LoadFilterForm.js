import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import Autosuggest from "react-autosuggest";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";

import TbMultiSelect from "./../../components/TbMultiSelect";
import DateRangePicker from "./../../components/DateRangePicker";

import loadStatusData from "./load-status-data";

const suggestions = [
  { label: "Afghanistan" },
  { label: "Aland Islands" },
  { label: "Brazil" },
  { label: "British Indian Ocean Territory" },
  { label: "Brunei Darussalam" }
];

function renderInput(inputProps) {
  const { classes, ref, ...other } = inputProps;

  return (
    <TextField
      fullWidth
      InputProps={{
        inputRef: ref,
        classes: {
          input: classes.input
        },
        ...other
      }}
    />
  );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.label, query);
  const parts = parse(suggestion.label, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map((part, index) => {
          return part.highlight ? (
            <span key={String(index)} style={{ fontWeight: 300 }}>
              {part.text}
            </span>
          ) : (
            <strong key={String(index)} style={{ fontWeight: 500 }}>
              {part.text}
            </strong>
          );
        })}
      </div>
    </MenuItem>
  );
}

function renderSuggestionsContainer(options) {
  const { containerProps, children } = options;

  return (
    <Paper {...containerProps} square>
      {children}
    </Paper>
  );
}

function getSuggestionValue(suggestion) {
  return suggestion.label;
}

function getSuggestions(value) {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
        const keep =
          count < 5 &&
          suggestion.label.toLowerCase().slice(0, inputLength) === inputValue;

        if (keep) {
          count = 1;
        }

        return keep;
      });
}

class LoadFilterForm extends React.Component {
  state = {
    value: "",
    suggestions: []
  };
  handleSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  handleChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.search}>
      <div>
        {loadStatusData.map(loadStatusData => {
          return (
            <TbMultiSelect className={classes.multiSelectStyle}
              showOptions={loadStatusData.showOptions}
              name={loadStatusData.name}
              options={loadStatusData.options}
              isCollapsible={loadStatusData.isCollapsible}
              isVertical={loadStatusData.isVertical}
            />
          );
        })}
      </div>
          <div className={classes.dateStyle}>  <DateRangePicker /> </div>
        <Autosuggest
          theme={{
            container: classes.container,
            suggestionsContainerOpen: classes.suggestionsContainerOpen,
            suggestionsList: classes.suggestionsList,
            suggestion: classes.suggestion
          }}
          renderInputComponent={renderInput}
          suggestions={this.state.suggestions}
          onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
          renderSuggestionsContainer={renderSuggestionsContainer}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={{
            classes,
            placeholder: "Search for coordinator...",
            value: this.state.value,
            onChange: this.handleChange
          }}
        />
      </div>
    );
  }
}

LoadFilterForm.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  container: {
    width:"35%",
    position: "relative",
    height: 200,
    marginLeft: "52px",
    marginTop: "60px",
  },
  suggestionsContainerOpen: {
    position: "absolute",
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0
  },
  suggestion: {
    display: "block"
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: "none"
  },
  search: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "4%"
  },
  dateStyle:{
    margin: "2%"
  }


});

export default withStyles(styles)(LoadFilterForm);
